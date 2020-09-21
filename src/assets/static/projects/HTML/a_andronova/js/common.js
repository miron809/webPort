// external js: isotope.js
jQuery(document).ready(function($) {
	var $grid = $('.grid').isotope({
		itemSelector: '.element-item',
		layoutMode: 'fitRows'
	});
	// filter functions
	var filterFns = {
		// show if number is greater than 50
		numberGreaterThan50: function() {
			var number = $(this).find('.number').text();
			return parseInt(number, 10) > 50;
		},
		// show if name ends with -ium
		ium: function() {
			var name = $(this).find('.name').text();
			return name.match(/ium$/);
		}
	};
	// bind filter button click
	$('.filters-button-group').on('click', '.button', function() {
		var filterValue = $(this).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[filterValue] || filterValue;
		$grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	$('.button-group').each(function(i, buttonGroup) {
		var $buttonGroup = $(buttonGroup);
		$buttonGroup.on('click', '.button', function() {
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');
		});
	});


	$(window).scroll(function() {
		if ($(this).scrollTop() > 400) {
		        $('.scroll_top').css("opacity", ".8");
		    } else if ($(this).scrollTop() <= 400) {
		            $('.scroll_top').css("opacity", "0");
			}
		});


	//scroll
	function scrollToTop() {
	    $('.scroll_top[href*=#]').bind("click", function(e) {
	        var anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $(anchor.attr('href')).offset().top
	        }, 1000);
	        e.preventDefault();
	    });
	    return false;
	}
	scrollToTop();


});

