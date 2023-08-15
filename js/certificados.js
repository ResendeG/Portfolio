var swiperCertificados = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 20,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    autoplay: {
       delay: 3500,
       disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".custom-button-next2",
      prevEl: ".custom-button-prev2",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        760: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
  });