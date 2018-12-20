$(document).ready(function () {

  'use strict';

   var c, currentScrollTop = 0,
       navbar = $('nav');

   $(window).scroll(function () {
      var a = $(window).scrollTop();
      var b = navbar.height();

      currentScrollTop = a;

      if (c < currentScrollTop && a > b + b) {
        document.getElementById("navbar").style.top = "-60px";
      } else if (c > currentScrollTop && !(a <= b)) {
        document.getElementById("navbar").style.top = "0px";
      }
      c = currentScrollTop;
  });

});
