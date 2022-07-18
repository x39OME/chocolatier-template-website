/* global $, alert, console */
// Header
$(function () {
  'use strict';
// Adjust Slider Height
  var winH    = $(window).height(),
      navH    = $('.navbar').innerHeight();
  $('.slider, .carousel-item').height(winH + navH);
});
// Scroll To Top
$(function (){
  'use strict';
  // Scroll To Top Button
  $(window).scroll(function(){
    $('.block').each(function(){
      if ($(window).scrollTop() > $(this).offset().top) {
        }
    });
    var scrollToTop = $('.scroll-to-top')
      if ($(window).scrollTop() >= 650) {
        if (scrollToTop.is(':hidden')) {
          scrollToTop.fadeIn(500);
        }
        } else {
          scrollToTop.fadeOut(500);
        }
  });
  // Clock On Scroll To Top Go Up
  $('.scroll-to-top').click(function(event){
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });
});
