(function() {
  'use strict';

  angular
    .module('davidarcus')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    
    var vm = this;

    vm.transition = function() {
      
      $log.debug('test');
      
      TweenMax.to($('.dave'), 0.75, {opacity:0, ease:Circ.easeOut});
      
      TweenMax.to($('.logo'), 0.75, {opacity:0, ease:Circ.easeOut});
      
      TweenMax.to($('#grad'), 0.75, {width:'50%', height:'100%', ease:Circ.easeOut});
      
    }
    
  }
})();
