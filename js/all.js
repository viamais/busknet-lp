"use strict";

//Comportamentos para o menu .
function toggleChevronIcon(menuItem) {
  var chevronIcon = menuItem.querySelector('iconify-icon');

  if (chevronIcon) {
    chevronIcon.classList.toggle('chevron-up');
  }
} //SWIPER


var slide_plans = new Swiper('.slide-plans', {
  // Default parameters
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  grabCursor: true,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    910: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    1210: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});