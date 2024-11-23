

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