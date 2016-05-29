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
      
      var S = document.getElementById("grad").getElementsByTagName("stop") , SL = S.length;
      var sunshineOffset=[0,90,95] , sunshineColor=['#ff0000','#ffc600','#ffffff'];

      var dayOffset=[0,60,100] , dayColor=['#0091a2','#6dfdff','#ffd16d'];

      var tl = new TimelineMax({repeat:-1,yoyo:true}).add("Sunshine",2).add("Day",6)

      for(var i=0;i<SL;i++){tl.to(S[i],2,{attr:{offset:sunshineOffset[i]+"%"},stopColor:sunshineColor[i]},"Sunshine")}
      for(var i=0;i<SL;i++){tl.to(S[i],2,{attr:{offset:dayOffset[i]+"%"},stopColor:dayColor[i]},"Day")}


      
    }
  }

})();
