$('.schedule__link').click(function (e) {
  e.preventDefault();
  $('.gifts').toggle();
});


$('.gift__add').click(function (e) {
  e.preventDefault();
  $('.gift-hidden').toggle();
  $('.gift__add').text('Свернуть');
});


$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      }
    }
  });
});

var $buoop = {
  required: {
    e: -4,
    f: -3,
    o: -3,
    s: -1,
    c: -3
  },
  insecure: true,
  unsupported: true,
  api: 2019.11
};

function $buo_f() {
  var e = document.createElement("script");
  e.src = "//browser-update.org/update.min.js";
  document.body.appendChild(e);
}

try {
  document.addEventListener("DOMContentLoaded", $buo_f, false);
} catch (e) {
  window.attachEvent("onload", $buo_f);
}