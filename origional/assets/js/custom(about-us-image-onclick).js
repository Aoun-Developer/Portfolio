

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

            /*-------------- CV Portfolio Functions Calling ---------------------------------------------------
            ------------------------------------------------------------------------------------------------*/
            this.about_opendetails();
        },

       
        /*------------------------------------------------------------------*/

        //about open details 
        about_opendetails: function () {
            if ($('.icon').length > 0) {
                $('.icon').on('click', function () {
                    $('.about_leftsection').toggleClass('open_details');
                });
            }
        }
        /*------------------------------------------------------------------*/

    };
    portfolio.init();


}(jQuery));