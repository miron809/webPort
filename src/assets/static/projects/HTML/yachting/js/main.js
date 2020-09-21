/**
 * Created by Dmitriy on 11.02.2017.
 */

jQuery(document).ready(function ($) {

    //header
    $(window).scroll(function () {
        if ($(window).scrollTop() > 50) {
            $('#header').addClass('active');
        }
        if ($(window).scrollTop() < 50) {
            $('#header').removeClass('active');
        }
    });

    //slider begin
    $('.slider-holder').slick({
        autoplay: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
//slider end

//popup
    $('.watch-video').click(function () {
        $('.popup-parent').fadeIn('slow');
    });
    $('.close-popup').click(function () {
        $('.popup-parent').fadeOut('slow');
    });
    $(document).on('click', function (e) {
        if ((!$(e.target).closest('.popup-window').length) && (!$(e.target).closest('.watch-video').length)) {
            if ($('.popup-window').is(':visible')) {
                $('.popup-parent').fadeOut('slow');
            }
        }
    });

    new WOW().init();
});
