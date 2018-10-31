(function() { //IIFE - immediately invoked function expression

// FIND SOME KEY DOM ELEMENTS
  var grid = document.querySelector('#grid');
  var bio = document.querySelector('#bio');
  var bioModal = document.querySelector('#bioModal');
  var bioIcon = document.querySelector('#bioIcon');
  var bioButton = document.querySelector('#bioButton');
  var contactButton = document.querySelector('#contactButton');
  var contactModal = document.querySelector('#contactModal');
  var backToTop = document.querySelector('#top');

  // SEND USER TO BAND BIOGRAPHY ON CLICK
  bioIcon.addEventListener('click', function(event) {
    // event.preventDefault();
    // bio.scrollIntoView({behavior: "smooth"});
      grid.classList.add('scrolledUp');
      bio.classList.add('visible');
  });

  // BACK TO TOP
  backToTop.addEventListener('click', function(event) {
    // event.preventDefault();
    // grid.scrollIntoView({behavior: "smooth"});
      grid.classList.remove('scrolledUp');
      bio.classList.remove('visible');  
  });

  // OPEN BAND BIOGRAPHY MODAL

   bioButton.addEventListener('click', function(event) {
    bioModal.classList.add('visible');  
   });


  // OPEN CONTACT FORM
  contactButton.addEventListener('click', function(event) {
    contactModal.classList.add('visible');
  });

  // CLOSE MODALS
  document.addEventListener('click', function (event) {
      if ( event.target.classList.contains( 'close' ) ) {
        bioModal.classList.remove('visible');
        contactModal.classList.remove('visible');
      }
  }, false);

} ()) //end of IIFE
