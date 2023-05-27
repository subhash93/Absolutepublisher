
// Header

hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
navBar = document.querySelector(".nav-bar");
navBar.classList.toggle("active");
}



// Testimonial

// $(".owl-carousel").owlCarousel({
//     loop: true,
//     margin: 10,
//     nav: false,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 2,
//       },
//       1000: {
//         items: 5,
//       },
//     },
//   });



  // Author


  // $(".all-author").owlCarousel({
  //   loop: true,
  //   margin: 10,
  //   nav: true,
  //   dots:true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // });



// DOUBLE OWL


  $(document).ready(function(){

    var one = $("#one");
    var two = $("#two");
    
    
  // Testimonial Owl
one.owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 5,
    },
  },
});



 // Author Owl
two.owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots:true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

    
    })