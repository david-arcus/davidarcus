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


        $rootScope.$on('$routeChangeSuccess', function() {

          // don't remove class if directive is used for ng-view as we need both classes applied simultaneously for animated transitions

          // if element has class 'animated-gradient' though, remove the old class

          if (elem.hasClass('animated-gradient')) {
            elem.removeClass(currentClass);
          }

          currentClass = $route.current.$$route.controllerAs;
          elem.addClass(currentClass);


        });

      }

    };

    return directive;

  }

})();
