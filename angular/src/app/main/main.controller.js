(function() {
  'use strict';

  angular
    .module('davidarcus')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1463809710965;
    
  }
})();
