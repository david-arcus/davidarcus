(function() {
  'use strict';

  angular
    .module('davidarcus')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    
    var vm = this;

    vm.changeGradient = function(gradientType) {
      
      $log.debug(gradientType);
      
    }
    
  }
})();
