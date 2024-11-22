

function burgerMenu(){
    const menuItems = document.querySelector('.mainLinks');
    if(menuItems.style.display === "flex"){
        menuItems.style.display = "none";
    } else {
        menuItems.style.display = "flex";
    }
}