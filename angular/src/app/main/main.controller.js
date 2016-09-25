(function() {
  'use strict';

  angular
    .module('davidarcus')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $location) {

    var vm = this;

    vm.transition = function() {

      $log.debug('transition applied!');

      // TweenMax.to($('.dave'), 0.75, {opacity:0, ease:Quint.easeOut});
      //
      // TweenMax.to($('.logo'), 0.75, {opacity:0, ease:Quint.easeOut});
      //
      // TweenMax.to($('#grad'), 0.75, {width:'50%', height:'100%', ease:Quint.easeOut});

      $location.path('/work');

    }

  }
})();
