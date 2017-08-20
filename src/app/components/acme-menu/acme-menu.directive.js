(function() {
  'use strict';

  angular
    .module('davidarcus')
    .directive('acmeMenu', acmeMenu);

  /** @ngInject */
  function acmeMenu() {

    var directive = {
      restrict: 'E',
      scope: {},
      templateUrl:'app/components/acme-menu/acme-menu.html',
      link: function (scope, elem, attr, ctrl) {



      }

    };

    return directive;

  }

})();
