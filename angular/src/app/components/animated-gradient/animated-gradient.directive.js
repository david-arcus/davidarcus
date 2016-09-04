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
    function animatedGradientController($window, $log) {
      
      // with special thanks to Kevin Ports
      // https://codepen.io/kevinports/

      var vm = this;

      var Anim = { //animation settings
        'duration': 3000,
        'interval' : 10,
        'stepUnit' : 1.0,
        'currUnit' : 0.0,
        'delay' : 10000
      }

      function Gradient(context, width, height) {
        
        this.ctx = context;
        this.width = width;
        this.height = height;
        this.colorStops = [];
        this.currentStop = 0;
        
      }

      Gradient.prototype.addStop = function(pos, colors) {
        
        var stop = {'pos': pos, 'colors':colors, 'currColor': null}
        this.colorStops.push(stop)
        
      }

      Gradient.prototype.updateStops = function() { //interpolate colors of stops
        
        var steps = Anim.duration / Anim.interval,
            step_u = Anim.stepUnit/steps,
            stopsLength = this.colorStops[0].colors.length - 1;
        
        for (var i = 0; i < this.colorStops.length; i++) { //cycle through all stops in gradient
          
          var stop = this.colorStops[i],
              startColor = stop.colors[this.currentStop],//get stop 1 color
              endColor, r, g, b;

          if (this.currentStop < stopsLength) { //get stop 2 color, go to first if at last stop
            
            endColor = stop.colors[this.currentStop + 1];
            
          } else {
            
            endColor = stop.colors[0];
            
          }

          //interpolate both stop 1&2 colors to get new color based on animaiton unit
          r = Math.floor(lerp(startColor.r, endColor.r, Anim.currUnit));
          g = Math.floor(lerp(startColor.g, endColor.g, Anim.currUnit));
          b = Math.floor(lerp(startColor.b, endColor.b, Anim.currUnit));

          stop.currColor = 'rgb('+r+','+g+','+b+')';
          
        }

        // update current stop and animation units if interpolaiton is complete
        if (Anim.currUnit >= 1.0) {
          
          Anim.currUnit = 0;
          
          if(this.currentStop < stopsLength){
            
            this.currentStop++;

            paused = true; 
            window.setTimeout(unPause, Anim.delay);
            
          } else {
            
            this.currentStop = 0;
            
          }
          
        }

        Anim.currUnit += step_u; //increment animation unit
        
      }

      Gradient.prototype.draw = function() {
        
        var gradient = ctx.createLinearGradient(0,this.width,this.height,0);

        for(var i = 0; i < this.colorStops.length; i++){
          
          var stop = this.colorStops[i],
              pos = stop.pos,
              color = stop.currColor;

          gradient.addColorStop(pos,color);
          
        }

        this.ctx.clearRect(0,0,this.width,this.height);
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0,0,this.width,this.height);
        
      }

      var $width, $height, gradient,
          canvas = document.getElementById("grad"),
          ctx = canvas.getContext("2d"),
          firstStop = [
            { 'r':'40', 'g':'229', 'b':'154' },
            { 'r':'255', 'g':'95', 'b':'109' },
            { 'r':'22', 'g':'191', 'b':'253' },
            { 'r':'194', 'g':'229', 'b':'156' },
            { 'r':'58', 'g':'97', 'b':'134' },
            { 'r':'40', 'g':'229', 'b':'154' },
          ],
          secondStop = [
            { 'r':'54', 'g':'222', 'b':'224' },
            { 'r':'255', 'g':'195', 'b':'113' },
            { 'r':'203', 'g':'48', 'b':'102' },
            { 'r':'100', 'g':'179', 'b':'244' },
            { 'r':'137', 'g':'37', 'b':'62' },
            { 'r':'54', 'g':'222', 'b':'224' }
          ],
          paused = true;
          
//          loveCouple = [
//              { 'r':'58', 'g':'97', 'b':'134' },
//              { 'r':'137', 'g':'37', 'b':'62' }
//          ],
//          sweetMorning = [
//              { 'r':'255', 'g':'95', 'b':'109' },
//              { 'r':'255', 'g':'195', 'b':'113' }
//          ],
//          transfile = [
//              { 'r':'22', 'g':'191', 'b':'253' },
//              { 'r':'203', 'g':'48', 'b':'102' }
//          ],
//          greenAndBlue = [
//              { 'r':'194', 'g':'229', 'b':'156' },
//              { 'r':'100', 'g':'179', 'b':'244' }
//          ],
//          home = [
//              { 'r':'40', 'g':'229', 'b':'154' },
//              { 'r':'54', 'g':'222', 'b':'224' }
//          ];
      
//          var loveCouple = ['#3a6186', '#89253e'];
//          var sweetMorning = ['#FF5F6D', '#FFC371'];
//          var transfile = ['#16BFFD', '#CB3066'];
//          var greenAndBlue = ['#c2e59c', '#64b3f4'];
//          var home = ['#28e59a', '#36dee0'];

      var updateUI = function() {
        
        $width = $window.innerWidth;
        $height = $window.innerHeight;

        canvas.width = $width;
        canvas.height = $height;

        gradient = new Gradient(ctx, canvas.width, canvas.height);
        
        gradient.addStop(0, firstStop);
        gradient.addStop(1, secondStop);

      }

      function animloop() {
        
        if (!paused) {
        
          window.requestAnimationFrame(animloop);
          gradient.updateStops();
          gradient.draw();
          
        }
        
      };
      
      function unPause() {
        paused = false;
        animloop();
      }
      
      function init() {
        gradient.updateStops();
        gradient.draw();
        window.setTimeout(unPause, Anim.delay);
      }

      updateUI();
      init();
      
      window.requestAnimationFrame(animloop);
      
      window.addEventListener('resize', updateUI, true);
      
//      window.onkeydown = function() {
//        paused = true; // flips the pause state
//      };

      //interpolation
      function lerp(a, b, u) {
        
        return (1 - u) * a + u * b;
        
      }

    }
    
  }

})();
