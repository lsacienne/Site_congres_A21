$(document).ready(function() {

    /**
     * 
     * INSERER ICI LES ENTREPRISES
     * 
     * /!\ 5 entreprises par container (container1/container2/container3/container4/container5/container6/container7/container8/container9/container10)
     * 
     */
    /* INSEREZ A PARTIR D'ICI */

    createTemplate("seekube","container1");

    /* INSEREZ JUSQU'A ICI */
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

function createTemplate(nom_entreprise,nom_parent){

    let parent = document.getElementById(nom_parent);
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
        this.logo = "images/"+jsonObject[0].logo;
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