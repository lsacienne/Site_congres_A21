let width_image = $('.image').width();
hasBeenClicked = false;
setRightArrowPosition(width_image);


/* Event listeners */
$(function () {
    setInterval(function(){
        if(!hasBeenClicked) {
            animateCarouselRightToLeft(width_image)
        } 
    }, 3500);
});

$(window).on('resize',function(){
    width_image = $('.image').width();
    setRightArrowPosition(width_image);
});

$(".carousel #suivant").on("click", function(){
    console.log("i've been clicked");
    hasBeenClicked = true;
    animateCarouselRightToLeft(width_image);
});

$(".carousel #precedent").on("click", function(){
    console.log("i've been clicked");
    hasBeenClicked = true;
    animateCarouselLeftToRight(width_image);
});

/* Position of right arrow */
$(".carousel ul").on("mouseenter",function() {
    let width_image = $('.image').width();
    setRightArrowPosition(width_image);
})


/* Functions */
function setRightArrowPosition(imageWidth) {
    let left_arrow = $(".carousel #precedent");
    let right_arrow = $(".carousel #suivant");
    let left_offset = left_arrow.offset().left + imageWidth - right_arrow.width() - 20;

    right_arrow.offset({top: left_arrow.offset().top, left:left_offset});
}

function animateCarouselRightToLeft(width_image){
    $(".carousel ul").animate({ marginLeft: -width_image }, 800, function () {
        $(this).css({ marginLeft: 0 }).find("li:last").after($(this).find("li:first"));
    });
}

function animateCarouselLeftToRight(width_image){
    $(".carousel ul").css({marginLeft: -width_image}).find("li:first").before($(".carousel ul").find("li:last"));
    $(".carousel ul").animate({ marginLeft: 0 }, 800);
}


