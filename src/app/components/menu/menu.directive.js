(function() {
  'use strict';

  angular
    .module('davidarcus')
    .directive('menu', menu);

  /** @ngInject */
  function menu() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/menu/menu.html',
      controller: MenuController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function MenuController() {
      var vm = this;
    }
  }

})();
