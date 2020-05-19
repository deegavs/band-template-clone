(function($){
    "use strict";
    $(document).ready(function() {

        /**
         * Home Slider Activation
         */
        $('.home-slider').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: false,
            mouseDrag: false,
            touchDrag: false,
            smartSpeed: 1000
        });
        $('.home-slider').on('translate.owl.carousel', function() {
            $('.home-slide-caption h1').removeClass('animated fadeInUp').css("opacity", "0");
            $('.home-slide-caption h5').removeClass('animated fadeInUp').css("opacity", "0");
            $('.home-slide-caption a').removeClass('animated slideInLeft').css("opacity", "0");
        });
        $('.home-slider').on('translated.owl.carousel', function() {
            $('.home-slide-caption h1').addClass('animated fadeInUp').css("opacity", "1");
            $('.home-slide-caption h5').addClass('animated fadeInUp').css("opacity", "1");
            $('.home-slide-caption a').addClass('animated slideInLeft').css("opacity", "1");
        });

        // Jquery Smooth Scroll        
        $('li.nav-item a').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '80';

        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + 'px'}, 1200, 'easeInOutExpo');
            event.preventDefault();
        });
        $('body').scrollspy({
            target: 'nav',
            offset: 95
        });

        // Responsive Menu Show/Hide
        $(".mobile-menu-btn").on('click', function() {
            $('.mobile-menu-wrap').css('right', '0px');
        });
        $("span#close-btn").on('click', function() {
            $('.mobile-menu-wrap').css('right', '-1000px');
        });
        $('nav.mobileMenu ul li a').on('click', function(){
            $('.mobile-menu-wrap').css('right', '-1000px');
        })        

    });

    // Solve Latest Album Section Height Issue
    var infoHeight = $('.latest-album-info').height();
    $('.latest-album-thumb').css('height', infoHeight);


	// Add fixedMenu
	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 250) {
			$('.header-section').addClass('fixedMenu-bg');
		} else {
			$('.header-section').removeClass('fixedMenu-bg');
		}
    });

	// Remove Preloader After Load Full Site 
	$(window).on('load', function() {
		$('.qoutes-preloader').fadeOut(500);
    });    
    

}(jQuery));