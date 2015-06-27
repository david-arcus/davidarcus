# Single box with LAMP stack via Puppet.
#
box          = 'puppetlabs/ubuntu-14.04-64-puppet'
domain       = 'local'
ip_address   = '192.168.0.73'
ram          = '2048'


nodes = [
    { :hostname => 'davidarcus',  :ip => '192.168.0.73', :box => 'puppetlabs/ubuntu-14.04-64-puppet', :ram => 2048 }
]

Vagrant.configure("2") do |config|
  config.vm.box = box


  # Use hostonly network with a static IP Address and enable
  # hostmanager so we can have a custom domain for the server
  # by modifying the host machines hosts file
  config.hostmanager.enabled = true
  config.hostmanager.manage_host = true

  nodes.each do |node|
    config.vm.define node[:hostname] do |node_config|
      node_config.vm.box = node[:box]
      node_config.vm.host_name = node[:hostname] + '.' + domain
      node_config.vm.network :private_network, ip: node[:ip]
      node_config.vm.synced_folder '.', '/site', nfs: true

      config.vm.provider "virtualbox" do |v|
        v.memory = ram
        v.cpus = 4
        v.name = node[:hostname]
		 v.customize ["modifyvm", :id, "--memory", 2024]
		 v.customize ["modifyvm", :id, "--natdnshostresolver1", "on"]
   		 v.customize ["modifyvm", :id, "--natdnsproxy1", "on"]
      end

    end
  end

  config.vm.provision :hostmanager


  config.vm.provision :puppet do |puppet|
    puppet.manifests_path = 'puppet/manifests'
    puppet.manifest_file = 'site.pp'
    puppet.module_path = 'puppet/modules'
  end

  config.vm.provision :shell, :inline => "sudo a2dissite 000-default"
  config.vm.provision :shell, :inline => "sudo service apache2 reload"

end
