// pure javascript


/**
 * <div class="template">
        <div class="image">
          <img src="images/seekube.png" alt="Logo de Seekube">
          <div class="decoration"></div>
        </div>
        <div class="nom_entreprise">
          <h2>Seekube</h2>
        </div>

        <div class="resume-wrapper">
          <div class="resume">
            <div class="bandeau">
              <img src="images/seekube.png" alt="Logo de Seekube">
            </div>
            <h2>Seekube</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas velit ullam numquam dolorum reiciendis amet voluptas consequatur consequuntur eligendi provident architecto modi ratione rerum quibusdam, ab et doloribus fugit facere!
            </p>
          </div>
        </div>

      </div>
 * 
 */

$(document).ready(function() {
    /* /!\ 5 entreprises par container */
    createTemplate("seekube",document.getElementById("container1"));
    setupJquery();
});


function setupJquery() {
    let template = $(".template");
    let focusedTemplate;

    template.on("click", function(){
        $(this).find(".resume-wrapper").stop().fadeTo("fast",1);
        //$(this).find(".resume-wrapper").css({ display: "unset"})
        focusedTemplate = $(this)
        console.log(focusedTemplate)
        
    })
    /*
    $(window).on("click",function(event) {
        console.log($(this))
        if(!$(event.target).closest(focusedTemplate).length) {
            focusedTemplate.find(".resume-wrapper").css({ display: "none"});
        }
    });
    */

    $(".resume-wrapper").on("click",function(event){
        event.stopPropagation();
        focusedTemplate.find(".resume-wrapper").stop().fadeTo("solw",-0.5,function(){
            focusedTemplate.find(".resume-wrapper").css({ display: "none"});
        })
        
    });
}

function createTemplate(nom_entreprise,parent){
    let jsonObject;

    let fileName = "json/"+nom_entreprise.toLowerCase() +".json";
    let httpRequest = new XMLHttpRequest(); // asynchronous request
    httpRequest.open("GET", fileName, true);
    httpRequest.send();
    httpRequest.addEventListener("readystatechange", function() {
        if (this.readyState === this.DONE) {
            // when the request has completed
            jsonObject = JSON.parse(this.response);
            new Template(jsonObject,parent);
        }
    });
}

class Template {
    constructor(jsonObject, parent) {
        

        this.name = jsonObject[0].name;
        this.logo = jsonObject[0].logo;
        this.textFile = "presentation_entreprises/"+jsonObject[0].content;

        this.handler = document.createElement("div");
        this.handler.classList.add("template");

        /* Logo du template non cliqué */

        this.logoXML = document.createElement("div");
        this.logoXML.classList.add("image");

        let img = document.createElement("img");
        img.src = this.logo;
        img.alt = "Logo de "+this.name;
        this.logoXML.appendChild(img);

        let decorationImg = document.createElement("div");
        decorationImg.classList.add("decoration");
        this.logoXML.appendChild(decorationImg);

        this.handler.appendChild(this.logoXML);

        /* Nom de l'entreprise non cliquée */

        let nomEntreprise = document.createElement("div");
        nomEntreprise.classList.add("nom_entreprise");
        nomEntreprise.innerHTML = "<h2>"+this.name+"</h2>";
        this.handler.appendChild(nomEntreprise);

        /* Container du résumé */
    
        this.resumeContainer = document.createElement("div");
        this.resumeContainer.classList.add("resume-wrapper");

        let resume = document.createElement("div");
        resume.classList.add("resume");

        let bandeau = document.createElement("div");
        bandeau.classList.add("bandeau");

        let imgResume = document.createElement("img");
        imgResume.src = this.logo;
        imgResume.alt = "Logo de "+this.name;
        bandeau.appendChild(imgResume);
        resume.appendChild(bandeau);

        let titreResume = document.createElement("h2");
        titreResume.innerHTML = this.name;
        resume.appendChild(titreResume);

        let texteResume = document.createElement("p");

        let txt = null;
        let httpRequestTxt = new XMLHttpRequest(); // asynchronous request
        httpRequestTxt.open("GET", this.textFile, true);
        httpRequestTxt.send();
        httpRequestTxt.addEventListener("readystatechange", function() {
            if (this.readyState === this.DONE) {
                  // when the request has completed
                txt = this.response;
                console.log(txt);
                texteResume.innerHTML = txt;
            }
        });
        
        resume.appendChild(texteResume);

        this.resumeContainer.appendChild(resume);

        this.handler.appendChild(this.resumeContainer);

        parent.appendChild(this.handler);
        
        setupJquery();
    }
}