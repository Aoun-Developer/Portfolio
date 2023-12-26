

(function ($) {
    "use strict";
    var portfolio = {
        initialised: false,
        version: 1.0,
        mobile: false,
        init: function () {

            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }

            this.testimonial_slider();
        },

       

        //about open details 
        testimonial_slider: function () {
            if ($('.port_testimonial_setions .swiper-container').length > 0) {
                var swiper = new Swiper('.port_testimonial_setions .swiper-container', {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    speed: 1000,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    autoplay: {
                        delay: 5500,
                        disableOnInteraction: false,
                    },
                });
            }
        }

    };
    portfolio.init();


}(jQuery));