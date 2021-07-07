$(function(){
AOS.init();

/* On rège ici le border-radius des blocks de calendrier */
let lines = $('.line:last .event-block');

lines.first().addClass("event-bottom-left");
lines.last().addClass("event-bottom-right");

window.addEventListener('load', AOS.refresh);
})
