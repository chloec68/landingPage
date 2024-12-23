
// function to display burger menu in on mobiles and tablets
function burgerMenuMobile(){
    const menuItems = document.querySelector('.mainLinks');
    if(menuItems.style.display === "block"){
        menuItems.style.display = "none";
    } else {
        menuItems.style.display = "block";
    }
}
//function to display dark mode
function darkMode() {
    let element = document.body;
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


//function to turn lines into cross (bruger menu) when clicking 

const burger = document.querySelector('.burger');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});