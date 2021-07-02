let logo_congres = document.getElementsByClassName("main-image");

// On fait une premier check à l'initialisation de la page pour charger le bon logo
if(window.innerWidth > 750){
    logo_congres[0].innerHTML = '<img src="images/Congres_indus_UTBM2.png" alt="Image de programmation"></img>'
} else {
    logo_congres[0].innerHTML = '<img src="images/logo.png" alt="Image de programmation"></img>'
}

// On a une focntion pour détecter un changement de taille et changer le logo en conséquence.
function redimensionnement() {
    
    if("matchMedia" in window) { // Détection
        if(window.matchMedia("(min-width:750px)").matches) {
            logo_congres[0].innerHTML = '<img src="images/Congres_indus_UTBM2.png" alt="Image de programmation"></img>'
        } else {
            logo_congres[0].innerHTML = '<img src="images/logo.png" alt="Image de programmation"></img>'
        }
    }
}

// On ajoute un eventListener qui va détecter quand la fenêtre change de taille
window.addEventListener('resize', redimensionnement, false);