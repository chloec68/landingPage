

function burgerMenu(){
    const menuItems = document.querySelector('.mainLinks');
    if(menuItems.style.display === "flex"){
        menuItems.style.display = "none";
    } else {
        menuItems.style.display = "flex";
    }
}

function burgerMenuMobile(){
    const menuItems = document.querySelector('.mainLinks');
    if(menuItems.style.display === "block"){
        menuItems.style.display = "none";
    } else {
        menuItems.style.display = "block";
    }
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    const darkModeButton = document.getElementById("darkModeButton");

    if(darkModeButton.innerHTML === "DARK MODE"){
        darkModeButton.innerHTML = "LIGHT MODE";
        darkModeButton.style.backgroundColor = "#ffffff";
        darkModeButton.style.color="#000000";
    }else{
        darkModeButton.innerHTML = "DARK MODE"
        darkModeButton.style.backgroundColor = "#000000";
        darkModeButton.style.color="#ffffff";
    }
 }