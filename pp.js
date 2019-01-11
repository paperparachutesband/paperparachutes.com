(function() { //IIFE - immediately invoked function expression

// FIND SOME KEY DOM ELEMENTS
  var carousel = document.querySelector('.carousel-wrapper');
  var grid = document.querySelector('#grid');
  var left = document.querySelector('#left');
  var right = document.querySelector('#right');
  var bio = document.querySelector('#bio');
  var bioIcon = document.querySelector('#bioIcon');
  var backToTop = document.querySelector('#top');

  // SCROLL THROUGH IMAGE CAROUSEL
  var i = 0;
  var carouselImages = document.querySelectorAll(".carousel-image");
  function scroll() {
     switch (i) {
          case 0:
              carousel.classList.add('img1');
              carousel.classList.remove('img2');
              carousel.classList.remove('img3');
              break;
          case 1:
              carousel.classList.remove('img1');
              carousel.classList.add('img2');
              carousel.classList.remove('img3');
              break;
          case 2:
              carousel.classList.remove('img1');
              carousel.classList.remove('img2');
              carousel.classList.add('img3');
              break;          
        }
  }
        
  left.addEventListener('click', function(event) {
    if(i>0) {
      i--;
    } else {
      i=2;
    }
    scroll();
    console.log(i);
  });

  right.addEventListener('click', function(event) {
    if(i < 2) {
      i++;
    } else {
      i = 0;
    }
    scroll();
    console.log(i);
  });


  // SEND USER TO BAND BIOGRAPHY ON CLICK
  bioIcon.addEventListener('click', function(event) {
    event.preventDefault();
      grid.classList.add('scrolledUp');
      bio.classList.add('visible');
  });

  // BACK TO TOP
  backToTop.addEventListener('click', function(event) {
    event.preventDefault();
      grid.classList.remove('scrolledUp');
      bio.classList.remove('visible');  
  });

} ()) //end of IIFE
