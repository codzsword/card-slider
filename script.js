// Initialize swiper.js for project slider

const swiper = new Swiper(".card-slider", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".nextArrowBtn",
    prevEl: ".prevArrowBtn",
  },
  pagination: {
    el: ".swiper-pagination",
    renderBullet: function (index, className) {
      return '<li class="' + className + '"></li>';
    },
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
