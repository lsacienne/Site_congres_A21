$(function(){
AOS.init();

/* On rège ici le border-radius des blocks de calendrier */
let lines = $('.line:last .event-block');

lines.first().addClass("event-bottom-left");
lines.last().addClass("event-bottom-right");

window.addEventListener('load', AOS.refresh);

/* On gère les intéractions avec le calendrier */
let cases = $('.event-block > .day');
let overlay = $('.day-page-background');
let close = $('.close-day-page');


cases.on('click',function(){
  overlay.css('display','block');
  $('html').css('overflow','hidden');
});


close.on('click',function(){
  overlay.css('display','none');
  $('html').css('overflow','scroll');
});


})
