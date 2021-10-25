$(window).scroll(function(){
    var scroll=$(window).scrollTop();
    $('.img-area video').css({
        width: (100+scroll/10) + "%"
    })
})
