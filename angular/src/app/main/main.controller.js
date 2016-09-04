(function() {
  'use strict';

  angular
    .module('davidarcus')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1463809710965;
    
    vm.changeGradient = function(gradientType) {
      
      $log.debug('hello');
      $log.debug(gradientType);
      
    }
    
  }
})();
