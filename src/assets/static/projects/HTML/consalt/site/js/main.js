$(document).ready(function () {
    new WOW().init();
    $(".home-navigation a").click(function () {
        $("html, body").animate({scrollTop: $(".home-window").offset().top});
        $(".home-navigation li:nth-child(2n)").addClass("animated bounceOutRight");
        $(".home-navigation li:nth-child(2n+1)").addClass("animated bounceOutLeft");
        $(".big-logo-image").addClass("animated fadeOut");
        $(".big-arrow").addClass("animated fadeInDown");
        $(".top-navigation").addClass("show-menu");
        $("#wrapper").css("display", "block");

        //init slider
        $(".slider-holder").slick({
            arrows: false,
            autoplay: true,
            dots: true
        });
        return false;

    });

    $(".top-nav-menu a").click(function () {
        $('html, body').animate({scrollTop: $(".ajax-content").offset().top}, 600);
    });

    //burger menu
    $(".menu-burger").click(function () {
        if ($(this).hasClass("active-burger")) {
            $(this).removeClass("active-burger");
            $("nav").slideUp().removeClass("active-menu");
        } else {
            $(this).addClass("active-burger");
            $('nav').slideDown().addClass("active-menu");
        }
    });

    var mobileWidth = $(window).width();
    //клик вне меню
    $(document).on('click', function (e) {
        if ((mobileWidth <= 768) && (!$(e.target).closest('.menu-burger').length) && (!$(e.target).closest('.active-menu').length)) {
            $('.menu-burger').removeClass('active-burger');
            $('nav').slideUp().removeClass('active-menu');
        }
    });

    $("nav li a").click(function () {
        if (mobileWidth <= 768) {
            $(".menu-burger").removeClass("active-burger");
            $("nav").slideUp();
        }
    });
    if (mobileWidth <= 768) {
        $(".big-arrow").addClass("animation myPulse");
        //init slider
        $(".slider-holder").slick({
            arrows: false,
            autoplay: true,
            dots: true
        });
    }

});