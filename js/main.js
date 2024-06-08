const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('menu--open');
});

const swiperFeedback = new Swiper('.feedback__slider', {
  loop: true,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperCertificate = new Swiper('.certificates__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,

  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    500: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    360: {
      slidesPerView: 1,
    },
  },
});

const accordion = document.querySelector('.accordion');
const accordionTitles = document.querySelectorAll('.accordion__title');

accordionTitles.forEach.call(accordionTitles, function (title) {
  title.addEventListener('click', function () {
    const currentText = title.parentElement.querySelector('.accordion__text');

    title.classList.toggle('accordion__title--active');
    currentText.classList.toggle('accordion__text--visible');

    if (currentText.classList.contains('accordion__text--visible')) {
      currentText.style.maxHeight = currentText.scrollHeight + 'px';
    } else {
      currentText.style.maxHeight = null;
    }
  });
});
