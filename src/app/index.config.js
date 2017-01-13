(function() {
  'use strict';

  angular
    .module('davidarcus')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

  }

})();
