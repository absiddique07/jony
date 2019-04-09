(function ($) {
"use strict";
// meanmenu
    jQuery('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        onePage: 'true',
        meanScreenWidth: "991"
    });
    
    // :: Preloader Active Code
      var $window = $(window);       
       $window.on('load', function () {
        $('#preloader').delay(3000).fadeOut('slow', function () {
            $(this).remove();
        });
     
    });
    
//off canvas menu  
    
$(".menu-trigger").on("click", function(){
$(".off-canvas-menu").addClass("active");
return false;
});
$(".menu-close").on("click", function(){
$(".off-canvas-menu").removeClass("active");
});
    
    
//off canvas menu
    
$(".search-trigger").on("click", function(){
$(".click-icon-area").addClass("active");
return false;
});
$(".click-close").on("click", function(){
$(".click-icon-area").removeClass("active");
});

     /* TOP Menu Stick  */
        $(window).on('scroll',function() {
        if ($(this).scrollTop() > 1){  
            $('#sticky-header').addClass("sticky");
          }
          else{
            $('#sticky-header').removeClass("sticky");
          }
        }); 
    
      //smooth-scrool
        $('.main-menu ul li.smooth-menu a,.off-canvas-menu ul li.smooth-menu a').bind('click', function(event){
            var $anchor = $(this);
            var headerH = '55';
            $('html, body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');
            event.preventDefault();
         });

        


// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 10000,
		dots: true,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: true, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();
    
    $('.counter').counterUp({
    delay: 1,
    time: 1000
    });


// owlCarousel
$(".testimonial-active").owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
    nav:true,
    smartSpeed:1000,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})
// owlCarousel
$(".client-active").owlCarousel({
    loop:true,
	items:1,
	navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
    nav:false,
    smartSpeed:1000,
    autoplay:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:3
        },
        992:{
            items:5
        }
    }
})


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});    



// isotop
$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: 1
	  }
	});
});
    
    // filter items on button click
$('.portfolio-menu').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $('.grid').isotope({ filter: filterValue });
  $('.portfolio-menu li').removeClass('active');
  $(this).addClass('active');
});






// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-arrow-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});
    

    
    
    
    
    $('#toggle4').click(function() {
      $('.trams-con').slideToggle('fast');
      if ($(this).hasClass('mins-icon')) {
        $(this).removeClass('mins-icon').addClass('plus-icon');
      } else {
        $(this).addClass('mins-icon');
      }
      return false;
    }); 
    
    
    $('#toggle45').click(function() {
      $('.trams-con1').slideToggle('last');
      if ($(this).hasClass('mins-icon1')) {
        $(this).removeClass('mins-icon1').addClass('plus-icon1');
      }  else {
        $(this).addClass('mins-icon1');
      }
      return false;
    });
    
    
    $('#toggle46').click(function() {
      $('.trams-con2').slideToggle('seceond');
      if ($(this).hasClass('mins-icon2')) {
        $(this).removeClass('mins-icon2').addClass('plus-icon2');
      }  else {
        $(this).addClass('mins-icon2');
      }
      return false;
    });
    
    
    $('#toggle47').click(function() {
      $('.trams-con3').slideToggle('fast');
      if ($(this).hasClass('mins-icon3')) {
        $(this).removeClass('mins-icon3').addClass('plus-icon3');
      }  else {
        $(this).addClass('mins-icon3');
      }
      return false;
    });
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

// WOW active
new WOW().init();


})(jQuery);