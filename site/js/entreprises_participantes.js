var template_count = 0;

$(document).ready(function() {

    let httpRequest = new XMLHttpRequest(); // asynchronous request
    /*
    CELA NE FONCTIONNE PAS

    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: "/json",
        success: function (data) {
            // List all mp4 file names in the page
            console.log(data);
            let temp = document.createElement("div");
            temp.innerHTML = data;
            let files = [];
            for(elem of temp.getElementsByClassName("name")) {
                if(elem.innerHTML != ".."){
                    files.push(elem.innerHTML);
                }
            }
            let file_count = 0;
            console.log(files);
            
            for(file of files) {
                if(file_count % 5 == 0) {
                    new Container(Math.floor(file_count/5)+1,document.querySelector("main"));
                }
                createTemplate(file,"container"+(Math.floor(file_count/5)+1).toString());
                file_count++;
            }
        }
    });
    */

    /**
     * 
     * Inserez les entreprises ici
     * 
     */

    createTemplate("akka.json");
    createTemplate("alten.json");
    createTemplate("altran.json");
    createTemplate("bee.json");
    createTemplate("capgemini.json");
    createTemplate("delfingen.json");
    createTemplate("efor.json");
    createTemplate("eiffage.json");
    createTemplate("electroimpact.json");
    createTemplate("esker.json");
    createTemplate("euro_information.json");
    createTemplate("eurovia.json");
    createTemplate("gerard_perrier_industrie.json");
    createTemplate("schmidt.json");
    createTemplate("seb.json");
    createTemplate("ikos.json");
    createTemplate("loreal.json");
    createTemplate("marine_nationale.json");
    createTemplate("nexter_systems.json");
    createTemplate("sii_strasbourg.json");
    createTemplate("andre_bazin.json");
    createTemplate("scomec.json");
    createTemplate("sonceboz.json");
    createTemplate("sopra_steria.json");
    createTemplate("stanley_black_decker.json");
    createTemplate("syselcom_mutuelle.json");
    createTemplate("vinci_energies.json");

    createTemplate("accenture.json");
    createTemplate("alstom.json");
    createTemplate("alsterea.json");
    createTemplate("cicorel.json");
    createTemplate("deloitte.json");
    createTemplate("expleo.json");
    createTemplate("groupe_atlantic.json");
    createTemplate("instavox.json");
    createTemplate("itlink.json");
    createTemplate("lv.json");
    createTemplate("piman.json");

    setupJquery();
});


function setupJquery() {
    let template = $(".template");
    let focusedTemplate;

    template.on("click", function(){
        $(this).find(".resume-wrapper").stop().fadeTo("fast",1);
        focusedTemplate = $(this);
        console.log(focusedTemplate);
        $("html").css({ overflow: "hidden"});
    })

    $(".resume-wrapper").on("click",function(event){
        event.stopPropagation();
        focusedTemplate.find(".resume-wrapper").stop().fadeTo("slow",-0.5,function(){
            focusedTemplate.find(".resume-wrapper").css({ display: "none"});
            $("html").css({ overflow: "unset"});

        })
        
    });
}

class Container {
    constructor(num_container,parent) {
        this.cont = document.createElement("div");
        this.cont.classList.add("flex-wrapper");
        this.cont.id = "container" + num_container.toString();
        parent.appendChild(this.cont);
    }
}

function createTemplate(nom_entreprise,nom_parent){

    let parent = document.getElementById(nom_parent);
    let jsonObject;

    let fileName = "json/"+nom_entreprise;
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
    constructor(jsonObject) {
        console.log(template_count);
        if(template_count % 5 == 0) {
            new Container(Math.floor(template_count/5)+1,document.querySelector("main"));
        }
        let nom_parent = "container"+(Math.floor(template_count/5)+1).toString();
        let parent = document.getElementById(nom_parent);

        this.name = jsonObject[0].name;
        this.logo = "images/entreprises_participantes/"+jsonObject[0].logo;
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
                texteResume.innerHTML = txt;
            }
        });
        
        resume.appendChild(texteResume);

        this.resumeContainer.appendChild(resume);

        this.handler.appendChild(this.resumeContainer);

        parent.appendChild(this.handler);
        template_count++;
        setupJquery();
    }
}