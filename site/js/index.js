/* Même codee avec jquery */
$(function(){
    AOS.init();

    let logo_congres = $('.main-image');

    logo_congres.fadeIn(1500);

    window.addEventListener('load', AOS.refresh);
})
