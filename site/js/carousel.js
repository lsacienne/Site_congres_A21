$(document).ready(function(){
    $('.carousel-slick').slick({
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 500,
        fade: true,
        cssEase: 'linear'
    });
});

  
/*
let width_image = $('.image').width();

$(function () {
    setInterval(function () {
        $(".carousel ul").animate({ marginLeft: -width_image }, 800, function () {
            $(this).css({ marginLeft: 0 }).find("li:last").after($(this).find("li:first"));
        })
    }, 3500);
});

$(window).on('resize',function(){
    width_image = $('.image').width();
});
*/