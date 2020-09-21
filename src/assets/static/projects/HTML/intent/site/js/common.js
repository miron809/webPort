$(document).ready(function () {
    //big slider options
    $('.big-slider-wrap').slick({
        asNavFor: '.small-slider-wrap',
        fade: true,
        infinity: true,
        speed: 1000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    arrows: false
                }
            }
        ]
    });
    //small slider options
    $('.small-slider-wrap').slick({
        asNavFor: '.big-slider-wrap',
        infinity: true,
        arrows: false,
        slidesToShow: 7,
        focusOnSelect: true,
        centerMode: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 5,
                    centerPadding: "70px"
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    centerMode: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    centerMode: false
                }
            }
        ]
    });

    //Isotope
    var $grid = $('.port-items-holder').imagesLoaded( function() {
        // init Isotope after all images have loaded
        $grid.isotope({
            itemSelector: '.port-item'
        });
    });
    // filter items on button click
    $('.port-list-buttons').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
        $('.port-list-buttons').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });

    //burger menu
    $('.menu-burger').click(function () {
        if ($(this).hasClass('burger-active')) {
            $(this).removeClass('burger-active');
            $('nav').removeClass('menu-open');
        } else {
            $(this).addClass('burger-active');
            $('nav').addClass('menu-open');
        }
    });
    $(document).on('click', function (e) {
        if ((!$(e.target).closest('.menu-burger').length) && (!$(e.target).closest('.menu-open').length)) {
            $('.menu-burger').removeClass('burger-active');
            $('nav').removeClass('menu-open');
        }
    });

    //mask
    $('#phone-number').mask("+38(999) 99-999");
    //wow
    new WOW().init();
});