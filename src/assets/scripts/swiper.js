import Swiper from './vendor/swiper.min';

const mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 3000,
  },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 15
    }
  }
});
