//main-slider
export const mainSwiper = new Swiper(".main-slider__swiper-container", {
  loop: true,
  spaceBetween: 32,
  slidesOffsetBefore: 405,
  slidesPerView: "auto",
  slideActiveClass: "active-slide",
  parallax: true,
  speed: 1000,

  // If we need pagination
  pagination: {
    el: ".main-slider__pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".main-slider__button_next",
    prevEl: ".main-slider__button_prev",
  },
});
//rooms slider
export const roomsSwiper = new Swiper(".rooms__swiper-container", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto",
  slideActiveClass: "active-slide",
  parallax: true,
  speed: 1000,

  // If we need pagination
  pagination: {
    el: ".rooms__pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".rooms__button_next",
    prevEl: ".rooms__button_prev",
  },
});

//tips slider

export const tipsSwiper = new Swiper(".tips__swiper-container", {
  loop: true,
  spaceBetween: 32,
  slidesPerView: "auto",
  slideActiveClass: "active-slide",
  parallax: true,
  speed: 1000,
  centerSlides: true,

  // If we need pagination
  pagination: {
    el: ".tips__pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".tips__button_next",
    prevEl: ".tips__button_prev",
  },
});
