let clicks = 0;
let menu = document.getElementsByTagName("menu-container")[0];
let symbol_menu = menu.getElementsByClassName("titre-menu")[0];

function updateClicks() {
    clicks++;
    console.log("clicks : "+clicks);
    if(clicks % 2 == 0){
        menu.getElementsByTagName("menu")[0].style.display = "none";
    } else {
        menu.getElementsByTagName("menu")[0].style.display = "unset";
        clicks = 1;
    }

}

symbol_menu.addEventListener('click',updateClicks);



