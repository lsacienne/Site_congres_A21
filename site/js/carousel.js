let width_image = $('.image').width();

setRightArrowPosition(width_image);


/* Event listeners */
$(function () {
    setInterval(function () {
        $(".carousel ul").animate({ marginLeft: -width_image }, 800, function () {
            $(this).css({ marginLeft: 0 }).find("li:last").after($(this).find("li:first"));
        })
    }, 3500);
});

$(window).on('resize',function(){
    width_image = $('.image').width();
    setRightArrowPosition(width_image);
});

$(".carousel ul").on("mouseenter",function() {
    let width_image = $('.image').width();
    setRightArrowPosition(width_image);
})

function setRightArrowPosition(imageWidth) {
    let left_arrow = $(".carousel #precedent");
    let right_arrow = $(".carousel #suivant");
    let left_offset = left_arrow.offset().left + imageWidth - right_arrow.width() - 20;

    right_arrow.offset({top: left_arrow.offset().top, left:left_offset});
}


