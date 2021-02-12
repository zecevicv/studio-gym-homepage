/* #Slider Initialization
  ======================================================= */
window.addEventListener('load', () => {
  // Features Slider
  const featuresSlider = document.querySelector('.features .swiper-container');
  if (featuresSlider) {
    new Swiper(featuresSlider, {
      slidesPerView: 1,
      centeredSlides: false,
      allowTouchMove: false,
      loop: false,
      spaceBetween: 25,
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          centeredSlides: true,
          allowTouchMove: true,
          loop: true,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: false,
          loop: false,
        },
      },
    });
  }

  // Essentials Slider
  const essentialsSlider = document.querySelector('.essentials .swiper-container');
  if (essentialsSlider) {
    new Swiper(essentialsSlider, {
      slidesPerView: 3,
      centeredSlides: false,
      allowTouchMove: false,
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          centeredSlides: true,
          allowTouchMove: true,
          spaceBetween: 20,
          loop: true,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: false,
          allowTouchMove: false,
          spaceBetween: 20
        },
        991: {
          spaceBetween: 70,
          loop: false,
        }
      },
    });
  }

  // Reviews Slider
  const reviewsSlider = document.querySelector('.reviews .swiper-container');
  if (reviewsSlider) {
    new Swiper(reviewsSlider, {
      slidesPerView: 3,
      centeredSlides: false,
      allowTouchMove: false,
      spaceBetween: 50,
      breakpoints: {
        0: {
          slidesPerView: 1.5,
          centeredSlides: true,
          allowTouchMove: true,
          spaceBetween: 20,
          loop: true,
        },
        768: {
          slidesPerView: 3,
          centeredSlides: false,
          spaceBetween: 20,
          loop: false,
        },
        991: {
          spaceBetween: 50,
          allowTouchMove: false
        }
      },
    });
  }
});

/* #AOS Animations
    ======================================================= */
AOS.init({
  startEvent: 'load',
  once: true,
  duration: 800,
  offset: 300,
  disable: window.innerWidth < 768
});