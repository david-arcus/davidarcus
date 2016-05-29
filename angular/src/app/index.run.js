(function() {
  'use strict';

  angular
    .module('davidarcus')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    
    $log.debug('runBlock end');
  }

})();
