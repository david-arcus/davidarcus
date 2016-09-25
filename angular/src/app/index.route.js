(function() {
  'use strict';

  angular
    .module('davidarcus')
    .config(routeConfig);

  function routeConfig($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/work', {
        templateUrl: 'app/work/work.html',
        controller: 'WorkController',
        controllerAs: 'work'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  }

})();
