$('#scroller').on('click',function() {
    const images = $('.footer-text').position().top;

    $('html, body').animate(
        {
            scrollTop: images
        },
        2000
    );
});