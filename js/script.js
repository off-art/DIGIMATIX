$('.schedule__link').click(function (e) {
  e.preventDefault();
  $('.gifts').toggle();
});
$('.gift__add').click(function (e) {
  e.preventDefault();
  $('.gift-hidden').toggle();
});


$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay:true,
    responsive: {
      0: {
        items: 1
      }
    }
  });
});