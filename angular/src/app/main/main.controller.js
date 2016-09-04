(function() {
  'use strict';

  angular
    .module('davidarcus')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    
    var vm = this;

    vm.transition = function(gradientType) {
      
      $log.debug(gradientType);
      
    }
    
  }
})();
