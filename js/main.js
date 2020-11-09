


  $('.test-items').on("init",function(event, slick){
	$(this).append('<div class="slider-count"><p><span id="current">1</span> <p class="line"></p> <span id="total">'+slick.slideCount+'</span></p></div>');
});

$('.test-items')
	.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		// finally let's do this after changing slides
		$('.slider-count #current').html(currentSlide+1);
	});

	$.each($('audio'), function () {
		$(this).stop();
	});

$(".test-items").slick({
	dots:false,
	slidesToShow:1,
	slidesToScroll:1,
	autoplay:false,
	fade:true,
	speed:800,
	autoplaySpeed:1000,
    prevArrow: $('.prev'),
	nextArrow: $('.next'),
	
	responsive: [
    {
			breakpoint:767,
			settings: {
				slidesToShow:1,
				slidesToScroll:1,
				fade:false,
				adaptiveHeight:false,
			}
		},
    {
			breakpoint:576,
			settings: {
				slidesToShow:1,
				slidesToScroll:1,
				fade:false,
				speed:200,
				
				
			}
		},
		{
			breakpoint:768,
			settings: {
				slidesToShow:1,
				slidesToScroll:1,
				adaptiveHeight:true,
			}
		},
		{
			breakpoint:1200,
			settings: {
				slidesToShow:1,
				slidesToScroll:1,
				
			}
		},
		
		
	]
});

$('.logo').click(function(){
	$('nav ul.nav').toggleClass('change fadeout');
	$('#harmburger').toggleClass('changed');
	$('.menu-img').toggleClass('d-none');
	
		if ($("nav ul.nav").hasClass("change"))
			$("nav ul.nav").removeClass("fadeout").addClass("fadein");
		else
			$("nav ul.nav").removeClass("fadein").addClass("fadeout");
	
   
});

$('a.carousel').click(function (e) {
  e.preventDefault();
});





 $(document).on('click', '.tab-content ul li', function () {
	var $el = $(this);
	$el.siblings().removeClass('active');
	$el.addClass('active');

});





$(document).ready(function(){
    $(window).scroll(function(){
		if ($(document).scrollTop() > 400) {
			$('nav ul.nav').removeClass('change');
			$("nav ul.nav").removeClass("fadein").addClass("fadeout");
			$('#harmburger').removeClass('changed');
        }
    });
});

  
 
$(document).on('click', '.nav-pills li', function () {
		var $el = $(this);
		$el.siblings().removeClass('active');
		$el.addClass('active');

});

$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (t) {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
        var e = $(this.hash);
        e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length && (t.preventDefault(), $("html, body").animate({
            scrollTop: e.offset().top
        }, 600, function () {
            var t = $(e);
            if (t.focus(), t.is(":focus")) return !1;
            t.attr("tabindex", "-1"), t.focus()
        }))
    }
});