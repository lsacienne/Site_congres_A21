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