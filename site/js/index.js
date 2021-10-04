$(function(){
    AOS.init();

    let logo_congres = $('.main-image');
    let titre_dernir_rubrique = $('#titre_derniere_rubrique');
    let titre_historique = $('#historique');

    if($(window).width() > 750){
        titre_dernir_rubrique.html("L'organisation du congrès industriel <div class='underline'></div>");
        titre_historique.html("L'historique du Congrès Industriel<div class='underline'></div>");
    } else {
        titre_dernir_rubrique.html("L'organisation du <div class='underline'></div>congrès industriel<div class='underline'></div>");
        titre_historique.html("L'historique du<div class='underline'></div>Congrès Industriel<div class='underline'></div>");
    }

    function redimensionnement(){
        if($(window).width() > 750){
            titre_dernir_rubrique.html("L'organisation du congrès industriel <div class='underline'></div>");
            titre_historique.html("L'historique du Congrès Industriel<div class='underline'></div>");
        } else {
            titre_dernir_rubrique.html("L'organisation du <div class='underline'></div>congrès industriel<div class='underline'></div>");
            titre_historique.html("L'historique du<div class='underline'></div>Congrès Industriel<div class='underline'></div>");
        }
    }
    $(window).on('resize',redimensionnement);

    logo_congres.fadeIn(1500);

    window.addEventListener('load', AOS.refresh);
})
