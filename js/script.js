$(document).ready(function () {
  $("#slider").owlCarousel(
    $(".owl-carousel").owlCarousel({
      autoplay: true,
      loop: true,
      margin: 10,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
          nav: true,
        },
        600: {
          items: 1,
          nav: false,
        },
        1000: {
          items: 1,
          nav: true,
          loop: false,
        },
      },
    }),
  );
});
