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
              carousel.classList.remove('img4');
              carousel.classList.remove('img5');
              carousel.classList.remove('img6');
              break;
          case 1:
              carousel.classList.remove('img1');
              carousel.classList.add('img2');
              carousel.classList.remove('img3');
              carousel.classList.remove('img4');
              carousel.classList.remove('img5');
              carousel.classList.remove('img6');              
              break;
          case 2:
              carousel.classList.remove('img1');
              carousel.classList.remove('img2');
              carousel.classList.add('img3');
              carousel.classList.remove('img4');
              carousel.classList.remove('img5');
              carousel.classList.remove('img6');
              break;  
          case 3:
              carousel.classList.remove('img1');
              carousel.classList.remove('img2');
              carousel.classList.remove('img3');
              carousel.classList.add('img4');
              carousel.classList.remove('img5');
              carousel.classList.remove('img6');
              break;  
          case 4:
              carousel.classList.remove('img1');
              carousel.classList.remove('img2');
              carousel.classList.remove('img3');
              carousel.classList.remove('img4');
              carousel.classList.add('img5');
              carousel.classList.remove('img6');
              break;  
          case 5:
              carousel.classList.remove('img1');
              carousel.classList.remove('img2');
              carousel.classList.remove('img3');
              carousel.classList.remove('img4');
              carousel.classList.remove('img5');
              carousel.classList.add('img6');
              break;                
        }
  }
        
  left.addEventListener('click', function(event) {
    if(i>0) {
      i--;
    } else {
      i=5;
    }
    scroll();
    console.log(i);
  });

  right.addEventListener('click', function(event) {
    if(i < 5) {
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

 scroll();

} ()) //end of IIFE
