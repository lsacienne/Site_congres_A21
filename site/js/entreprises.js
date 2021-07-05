AOS.init();
/* On rège ici le border-radius des blocks de calendrier */
let event_top = $('.upper-block .event-block');
let event_bottom = $('.lower-block .event-block');

if($(window).width() > 750) {
    event_bottom.first().addClass("event-bottom-left");
} else {
    event_top.last().addClass("event-bottom-left");
}

$(window).on('resize',function(){
    if($(window).width() > 750) {
        event_bottom.first().addClass("event-bottom-left");
        event_top.last().removeClass("event-bottom-left");
    } else {
        event_top.last().addClass("event-bottom-left");
        event_bottom.first().removeClass("event-bottom-left");
    }
})
