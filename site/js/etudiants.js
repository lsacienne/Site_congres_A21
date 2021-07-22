$(function(){
AOS.init();

/* On rège ici le border-radius des blocks de calendrier */
let lines = $('.line:last .event-block');

lines.first().addClass("event-bottom-left");
lines.last().addClass("event-bottom-right");

window.addEventListener('load', AOS.refresh);

/* On gère les intéractions avec le calendrier */
let cases = $('.event-block > .day');
let close = $('.close-day-page');
var id;

cases.on('click',function(e){
    //Getting the id(=day)
    id = this.id;

    //Setting the correct informations
    $('.calendrier-top > h3').text(id + ' Octobre 2021');

    //Dislaying page
    $('.day-page-background').css('display','block');
    $('html').css('overflow-y','hidden');
});


close.on('click',function(){
  //Closing page
  $('.day-page-background').css('display','none');
  $('html').css('overflow-y','scroll');
});


/* Intéraction FAQ */
let question_container = $('.faq-container .question-container');
let answer = $('.faq-container .question-container i p');

question_container.on('click', function(){
  let id = this.id;
  $('#' + id + ' i p').css('display','unset');
});

question_container.mouseleave(function() {
  let id = this.id;
  $('#' + id + ' i p').css('display','none');
});

})
