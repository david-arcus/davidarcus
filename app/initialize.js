(function() {
  'use strict'

  var home = document.querySelector('.home');
  var logo = document.querySelector('.logo');
  var dave = document.querySelector('.dave');
  var paisley = document.querySelector('.paisley');
  var grad = document.querySelector('.grad');
  var descriptions = document.getElementsByClassName('description');
  var dividers = document.getElementsByClassName('divider');
  // var videos = document.getElementsByTagName('video');
  var imageContainers = document.getElementsByClassName('image');
  var images = document.getElementsByClassName('lazy');

  var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var viewportThreshold = 0; // number of pixels beneath viewport before we load video content
  var scrollTimer, lastScrollFireTime = 0;
  var scrolling = false;
  var scrollTop;
  var minScrollTime = 200;
  var now = new Date().getTime();

  //          var loveCouple = ['#3a6186', '#89253e'];
  //          var sweetMorning = ['#FF5F6D', '#FFC371'];
  //          var transfile = ['#16BFFD', '#CB3066'];
  //          var greenAndBlue = ['#c2e59c', '#64b3f4'];
  //          var home = ['#28e59a', '#36dee0'];

  var Dave = {

    init:function() {
      document.addEventListener('DOMContentLoaded', this.generateDividers);
      window.addEventListener('scroll', this.runOnScroll);
    },

    runOnScroll:function() {
      // console.log('scrolling');
      // console.log(window.pageYOffset);

      if (!scrollTimer) {
        if (now - lastScrollFireTime > (3 * minScrollTime)) {
            Dave.lazyLoadImages();   // fire immediately on first scroll
            lastScrollFireTime = now;
        }
        scrollTimer = setTimeout(function() {
            scrollTimer = null;
            lastScrollFireTime = new Date().getTime();
            Dave.lazyLoadImages();
        }, minScrollTime);
      }

      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

      console.log(scrollTop);

      if (!scrolling) {

        if (scrollTop > 0) {
          grad.classList.add('half', 'behind');
          logo.classList.remove('visible');
          dave.classList.remove('visible');
          paisley.classList.add('visible');

          for (var i = 0; i< descriptions.length; i++) {
            descriptions[i].classList.add('visible');
            imageContainers[i].classList.add('visible');
          }

          scrolling = true;
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

        if (scrollTop == 0) {
          grad.classList.remove('half', 'behind');
          logo.classList.add('visible');
          dave.classList.add('visible');
          paisley.classList.remove('visible');

          for (var i = 0; i< descriptions.length; i++) {
            descriptions[i].classList.remove('visible');
            imageContainers[i].classList.remove('visible');
          }

          scrolling = false;

          images[0].classList.remove('visible');

          console.log('back to top');
        } else if (scrollTop < 0) {
          scrolling = false;
        }

      }

    },

    checkVideos:function() {

      // lazy load our videos

      console.log('---');

      for (var i = 0; i < videos.length; i++) {

        var video = videos[i];
        var currentTop = video.getBoundingClientRect().top;
        var elementHeight = video.clientHeight;

        console.log(video.src + ': ' + currentTop);

        // if video is within viewport threshold play it
        if (currentTop < (viewportHeight + viewportThreshold) && currentTop > (0 - elementHeight)) {

          // console.log(video.src + ': video in frame');

          if (video.paused) {

            video.play();

          }

          //video.classList.addClass('visible');

        } else {

          if (!video.paused && video.currentTime > 0) {

            // console.log(video.src + ': video paused');
            video.pause();

          }

        }

        console.log(video.src + ': ' + (video.paused == true ? 'paused ': 'playing'));

      }

    },

    lazyLoadImages: function() {

      // lazy load our images

      console.log('---');

      for (var i = 0; i < images.length; i++) {

        var image = images[i];
        var currentTop = image.getBoundingClientRect().top;
        var elementHeight = image.clientHeight;

        // console.log(image.dataset.src + ': ' + currentTop);

        // if image is within viewport threshold load it
        if (currentTop < (viewportHeight + viewportThreshold) && currentTop > (0 - elementHeight)) {

          image.src = image.dataset.src;
          image.classList.add('visible');

          console.log(image.dataset.src + ': image in frame');


        } else {


        }

      }

    },

    generateDividers:function() {

      for (var i = 0; i< dividers.length; i++) {

        // generate distinct number for each property of the squares

        var size = Dave.generateDistinctNumbers(10, 12, false);
        var opacity = Dave.generateDistinctNumbers(0.2, 0.7, true);
        //var marginBottom = Dave.generateDistinctNumbers(-1, 1, false);

        for (var j = 0; j<3; j++) {
          var square = document.createElement('div');

          dividers[i].appendChild(square);
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
