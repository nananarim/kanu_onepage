AOS.init();


//video scroll
$(window).scroll(function(){
    var scroll=$(window).scrollTop();
    $('.video-area video').css({
        width: (100+scroll/5) + "%"
    })
})

// PRODUCTS hover
$('.a1').mouseenter(function(){
    $('.a').css('display', 'block');
    $('.b').css('display', 'none');
    $('.c').css('display', 'none');
    $('.d').css('display', 'none');
});
$('.a1').mouseleave(function(){
    $('.a').css('display', 'none');
});
$('.b1').hover(function(){
    $('.a').css('display', 'none');
    $('.b').css('display', 'block');
    $('.c').css('display', 'none');
    $('.d').css('display', 'none');
});
$('.b1').mouseleave(function(){
    $('.b').css('display', 'none');
});
$('.c1').hover(function(){
    $('.a').css('display', 'none');
    $('.b').css('display', 'none');
    $('.c').css('display', 'block');
    $('.d').css('display', 'none');
});
$('.c1').mouseleave(function(){
    $('.c').css('display', 'none');
});
$('.d1').hover(function(){
    $('.a').css('display', 'none');
    $('.b').css('display', 'none');
    $('.c').css('display', 'none');
    $('.d').css('display', 'block');
});
$('.d1').mouseleave(function(){
    $('.d').css('display', 'none');
});

//menu-toggle-btn
$(function() {
    $(".menu-toggle-btn").click(function() {
      $(".gnb").stop().slideToggle("fast");
    });
});


//slick
$('.slider').slick({
    infinite: true,
    autoplay : true,
    autoplaySpeed : 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 541,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }]
});
// 스크롤 시 노출 모션
var controller = new ScrollMagic.Controller();

var sceneTitle = new ScrollMagic.Scene({
    triggerElement: ".section03",
    triggerHook: "onEnter",
    offset: 600,
    reverse: false // false : 한번만 적용, 기본값 : true
})
    .setTween(
        new TimelineLite()
            .fromTo(".tit_wrap .tit", 1, {autoAlpha: 0, y: 50}, {autoAlpha: 1, y: 0, ease: Power2.easeOut}, '-=0.55')
            .fromTo(".tit_wrap .txt", 1, {autoAlpha: 0, y: 100}, {autoAlpha: 1, y: 0, ease: Power2.easeOut}, '-=0.5')
            .fromTo(".square_inner", 1, {autoAlpha: 0}, {autoAlpha: 1, height: 355, ease: Power2.easeOut, onComplete: staggeredMotion}, '-=0.75')
            //.to(".square_inner", 1, {height: 585, ease: Power2.easeOut, onComplete: staggeredMotion}, '-=0.2')
            // .fromTo(".square.brand" , 1, {y: 0}, {y: -30, ease: Power1.easeOut}, '-=0.2')
            // .fromTo(".square.premium" , 1, {y: 0}, {y: 30, ease: Power1.easeOut}, '-=0.2')
    )
    .addTo(controller);

    function staggeredMotion() {
        TweenMax.fromTo(".square.brand" , 1, {y: 0}, {y: -30, ease: Power1.easeOut, yoyo: false});
        TweenMax.fromTo(".square.premium" , 1, {y: 0}, {y: 30, ease: Power1.easeOut, yoyo: false});
    }

