export default class SwiperConfig {
  constructor(element, options = {}) {
    this.swiper = new Swiper(element, {
      grabCursor: false, 
      centeredSlides: true,
      loop: false,
      slidesPerView: "auto",
      spaceBetween: 24, 
      direction: 'horizontal',
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      },

      allowSlidePrev: true,
      allowSlideNext: true,
      on: {
        init: function () {
          this.slides.forEach((slide) => {
            slide.addEventListener('mouseup', () => {
              const swiperSlides = document.querySelectorAll(".swiper-slide");
              swiperSlides.forEach((e) => {
                if (e.hasClass("swiper-slide-active")) {
                  const markers = document.querySelectorAll('e .marker');
                  markers.forEach(marker => {
                      marker.classList.add('hide');
                  });
                }
              })
           
            });
          });
        },
      },
      ...options,
    });



   
   
  }


}


