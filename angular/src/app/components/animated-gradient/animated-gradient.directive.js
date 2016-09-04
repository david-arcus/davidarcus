(function() {
  'use strict';

  angular
    .module('davidarcus')
    .directive('animatedGradient', animatedGradient);

  /** @ngInject */
  function animatedGradient() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/animated-gradient/animated-gradient.html',
      controller: animatedGradientController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function animatedGradientController() {
      
      var vm = this;
      
      var background = document.getElementById('grad').getElementsByTagName('stop');
      
      var first = background[0];
      var second = background[1];
      
      var loveCouple = ['#3a6186', '#89253e'];
      var sweetMorning = ['#FF5F6D', '#FFC371'];
      var transfile = ['#16BFFD', '#CB3066'];
      var greenAndBlue = ['#c2e59c', '#64b3f4'];
      var home = ['#28e59a', '#36dee0'];

      var tl = new TimelineMax({repeat:-1,yoyo:true});
      
      tl.to( first, 10, { stopColor:sweetMorning[0] }, 'sweetMorning');
      tl.to( second, 10, { stopColor:sweetMorning[1] }, 'sweetMorning');
      
      tl.delay(10);
      
      tl.to( first, 10, { stopColor:loveCouple[0] }, 'loveCouple');
      tl.to( second, 10, { stopColor:loveCouple[1] }, 'loveCouple');
      
      tl.delay(10);
      
      tl.to( first, 10, { stopColor:transfile[0] }, 'transfile');
      tl.to( second, 10, { stopColor:transfile[1] }, 'transfile');
      
      tl.delay(10);
      
      tl.to( first, 10, { stopColor:greenAndBlue[0] }, 'greenAndBlue');
      tl.to( second, 10, { stopColor:greenAndBlue[1] }, 'greenAndBlue');
      
      tl.delay(10);
      
      tl.to( first, 10, { stopColor:home[0] }, 'home');
      tl.to( second, 10, { stopColor:home[1] }, 'home');
      
      
      
    }
    
  }

})();
