(function() {
  'use strict'

  var Lazy = {
    viewportHeight:     Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
    viewportThreshold:  0, // number of pixels beneath viewport before we load video content
    scrollTimer:        false,
    lastScrollFireTime: 0,
    scrolling:          false,
    scrollTop:          0,
    minScrollTime:      200,
    now:                new Date().getTime()
  };

  var Elements = {

    overlay:      document.querySelector('.overlay'),
    logo:         document.querySelector('.logo'),
    dave:         document.querySelector('.dave'),
    container:    document.querySelector('.container'),
    // playVideos:   document.getElementsByClassName('play-video'),
    grad:         document.querySelector('.grad'),
    descriptions: document.getElementsByClassName('description'),
    dividers:     document.getElementsByClassName('divider'),
    images:       document.getElementsByClassName('lazy'),
    firstImage:   document.getElementById('first-image')

  };

  var Dave = {

    init:function() {

      document.addEventListener('DOMContentLoaded', this.generateDividers);
      document.addEventListener('scroll', this.runOnScroll);
      document.addEventListener('touchmove', this.runOnScroll, false);

      // var modalActive = false;
      //
      // for (var i = 0; i < Elements.playVideos.length; i++) {
      //   Elements.playVideos[i].addEventListener('click', function() {
      //
      //     Elements.container.classList.add('reduced');
      //     Elements.grad.classList.add('reduced');
      //     Elements.overlay.classList.add('show');
      //     modalActive = true;
      //
      //   });
      // }
      //
      // Elements.overlay.addEventListener('click', function() {
      //
      //   if (modalActive) {
      //
      //     setTimeout(function() {
      //       Elements.grad.classList.remove('reduced');
      //     },800);
      //     Elements.container.classList.remove('reduced');
      //     Elements.overlay.classList.remove('show');
      //     modalActive = false;
      //
      //   }
      //
      // });

    },

    runOnScroll:function() {
      // console.log('scrolling');
      // console.log(window.pageYOffset);

      if (!Lazy.scrollTimer) {
        // console.log('not');
        if (Lazy.now - Lazy.lastScrollFireTime > (3 * Lazy.minScrollTime)) {
            Dave.lazyLoadImages();   // fire immediately on first scroll
            Lazy.lastScrollFireTime = Lazy.now;
        }
        Lazy.scrollTimer = setTimeout(function() {
            Lazy.scrollTimer = null;
            Lazy.lastScrollFireTime = new Date().getTime();
            Dave.lazyLoadImages();
        }, Lazy.minScrollTime);
      }

      Lazy.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      // console.log(scrollTop);

      if (!Lazy.scrolling) {

        if (Lazy.scrollTop > 0) {
          Elements.grad.classList.add('half', 'behind');
          Elements.logo.classList.remove('visible');
          Elements.dave.classList.remove('visible');
          Elements.firstImage.classList.add('mobile-fade');

          for (var i = 0; i< Elements.descriptions.length; i++) {
            Elements.descriptions[i].classList.add('visible');
            // imageContainers[i].classList.add('visible');
          }

          Lazy.scrolling = true;
          //console.log('scrolling')
          //
          // for (var i = 0; i< dividers.length; i++) {
          //
          //   var square = dividers[i].children;
          //
          //   square[0].classList.add('up');
          //   square[2].classList.add('down');
          //
          // }

        }

      } else {

        if (Lazy.scrollTop <= 0) {
          Elements.grad.classList.remove('half', 'behind');
          Elements.logo.classList.add('visible');
          Elements.dave.classList.add('visible');
          Elements.firstImage.classList.remove('mobile-fade');

          for (var i = 0; i< Elements.descriptions.length; i++) {
            Elements.descriptions[i].classList.remove('visible');
            // imageContainers[i].classList.remove('visible');
          }

          Lazy.scrolling = false;

          Elements.images[0].classList.remove('visible');

          console.log('back to top');
        } else if (Lazy.scrollTop < 0) {
          Lazy.scrolling = false;
        }

      }

    },

    lazyLoadImages: function() {

      // lazy load our images

      // console.log('---');

      for (var i = 0; i < Elements.images.length; i++) {

        var image = Elements.images[i];
        var currentTop = image.getBoundingClientRect().top;
        var elementHeight = image.clientHeight;

        // console.log(image.dataset.src + ': ' + currentTop);

        // if image is within viewport threshold load it
        if (currentTop < (Lazy.viewportHeight + Lazy.viewportThreshold) && currentTop > (0 - elementHeight)) {

          image.src = image.dataset.src;
          image.classList.add('visible');

          // console.log(image.dataset.src + ': image in frame');

        }

      }

    },

    generateDividers:function() {

      for (var i = 0; i< Elements.dividers.length; i++) {

        // generate distinct number for each property of the squares

        var size = Dave.generateDistinctNumbers(10, 12, false);
        var opacity = Dave.generateDistinctNumbers(0.2, 0.7, true);
        //var marginBottom = Dave.generateDistinctNumbers(-1, 1, false);

        for (var j = 0; j<3; j++) {
          var square = document.createElement('div');

          Elements.dividers[i].appendChild(square);
          square.style.width = size[j] + 'px';
          square.style.height = size[j] + 'px';
          square.style.opacity = opacity[j];
          //square.style.marginTop = marginBottom[j] + 'px';

        }
      }

    },

    generateDistinctNumbers:function(min, max, isFloat) {

      var arr = [];

      while(arr.length < 3){

        var randomNumber;

        if (isFloat) {

          randomNumber = Math.random() * (max - min) + min;
          randomNumber = randomNumber.toFixed(1);

        } else {

          min = Math.ceil(min);
          max = Math.floor(max);

          randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

        }

        if(arr.indexOf(randomNumber) > -1) continue;
        arr[arr.length] = randomNumber;

      }

      return arr;

    }

  };

  Dave.init();

})();
