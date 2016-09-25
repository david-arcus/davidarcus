(function() {
  'use strict';

  angular
    .module('davidarcus')
    .directive('pageClass', pageClass);

  /** @ngInject */
  function pageClass($rootScope, $route, $log) {

    var directive = {
      restrict: 'A',
      scope: {},
      link: function (scope, elem, attr, ctrl) {

        // $log.debug('route changed');

        var currentClass = $route.current.$$route.controllerAs;

        elem.addClass(currentClass);

        // $log.debug($route.current.$$route.controllerAs);

        $rootScope.$on('$routeChangeSuccess', function() {

          elem.removeClass(currentClass);
          currentClass = $route.current.$$route.controllerAs;
          elem.addClass(currentClass);

          //$log.debug($route.current.$$route.controllerAs);

        });

      }

    };

    return directive;

  }

})();
