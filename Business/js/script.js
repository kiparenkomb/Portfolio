$('.mob-menu').on('click', function(){
	$('header nav').addClass('active');
});

$('.cancel').on('click', function(){
	$('header nav').removeClass('active');
});



$('.form-menu').on('click', function(){
  $('.get').show()
  if(--i) setTimeout(clicker, 10 * 1000);
});

$('.cancel').on('click', function(){
  $('.get').hide();
});



$('.baner-content').slick({
  infinite: true,
  arrows: true,
  dots: true,
  autoplay: true,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1
});

$(function() {
    $('.item').matchHeight({
    	 byRow: false
    });
});

$(function() {
    $( "#tabs" ).tabs({
		active: 0
	});
  });
  
  

// ------animation offer------
$(window).scroll(function(){
  $('.offer .left').animateOnScroll({
    scrollDownEffect: 'fadeInUp left-a'
  });
});

$(window).scroll(function(){
  $('.offer .center').animateOnScroll({
    scrollDownEffect: 'fadeInUp center-a'
  });
});

$(window).scroll(function(){
  $('.offer .right').animateOnScroll({
    scrollDownEffect: 'fadeInUp right-a'
  });
});



// ------animation news------
$(window).scroll(function(){
  $('.news .one .step').animateOnScroll({
    scrollDownEffect: 'fadeInUp one-b'
  });
});

$(window).scroll(function(){
  $('.news .two .step').animateOnScroll({
    scrollDownEffect: 'fadeInUp two-b'
  });
});

$(window).scroll(function(){
  $('.news .three .step').animateOnScroll({
    scrollDownEffect: 'fadeInUp three-b'
  });
});

$(window).scroll(function(){
  $('.news .four .step').animateOnScroll({
    scrollDownEffect: 'fadeInUp four-b'
  });
});



// ------smooth scrolling------
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 1500, 'swing', function () {
 window.location.hash = target;
 });
 });


// ------smooth scrolling------
$(window).scroll(function(){
if ($(window).scrollTop() > 400) {
  $('.block2').addClass('scroll_top');
 };
if ($(window).scrollTop() <= 400) {
  $('.scroll_top').removeClass('scroll_top');
 };
})

$(window).scroll(function(){
  $('.scroll_top').animateOnScroll({
    scrollDownEffect: 'fadeInUp top-a'
  });
});