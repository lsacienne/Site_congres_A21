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

let box = $('.calendrier-box');

$('.day-page-background').on('click',function(e){

  if(e.target == this){
    $('.day-page-background').css('display','none');
    $('html').css('overflow-y','scroll');
  }

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



});



/**
 * <div class="day-page-background">
          <div class="calendrier-box">
            <div class="close-day-page">&times;</div>
            <header class="calendrier-top" id="day-page-top">
                <h3 class="date">18 Octobre 2021</h3>
            </header>
            <div class="split-days">
              <div class="line">
              <div class="event-block2">
                <div>
                  <p class="hour-text">12h00</p>
                </div>
                <div class="activity-text">
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

              <div class="event-block2">
                <div>
                  <p class="hour-text">12h00</p>
              </div>
              <div class="activity-text">
                  <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div class="event-block2">
              <div>
                <p class="hour-text">12h00</p>
              </div>
              <div class="activity-text">
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
           </div>
          </div>

            <div class="line">
            <div class="event-block2">
              <div>
                <p class="hour-text">12h00</p>
            </div>
            <div class="activity-text">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

            <div class="event-block2">
              <div>
                <p class="hour-text">12h00</p>
            </div>
            <div class="activity-text">
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>

          <div class="event-block2">
            <div>
              <p class="hour-text">12h00</p>
            </div>
            <div class="activity-text">
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
         </div>
        </div>
      </div>
    </div>
  </div>
 */

/*
new CalendarDay();

class CalendarDay {
  constructor(date) {
    this.page_background = document.createElement("div");
    this.page_background.classList.add("day-page-background");
    

    this.box = document.createElement("div");
    this.box.classList.add("calendrier-box");
    this.page_background.appendChild(this.box);

    let closeDayPage = document.createElement("div");
    closeDayPage.classList.add("close-day-page");
    closeDayPage.innerHTML = "&times;";
    this.box.appendChild(closeDayPage);

    let header = document.createElement("header");
    header.classList.add("calendrier-top");
    header.id = "day-page-top";
    header.innerHTML = "<h3 class='date'>"+date+"<h3>";
    this.box.appendChild(header);

    

  }
}
*/
