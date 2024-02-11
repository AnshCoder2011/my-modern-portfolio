/**********************Toggle style switcher*********************/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});
// hide style switcher on scroll 
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open"));
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

const alternativeStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    localStorage.setItem("color", color);
    changeColor();
}

function changeColor() {
    alternativeStyle.forEach((style) => {
        if (localStorage.getItem("color") === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        }
        else {
            style.getAttribute("disabled", "true")
        }
    });
}

/***********************light and dark mode*****************/
const dayNight = document.querySelector(".day-night");

window.addEventListener("load", () => {
    if (document.body.classList.contains("dark"));{
        dayNight.querySelector("i").classList.add("fa-sun");
      } 
    //   else{
    //          dayNight.querySelector("i").classList.add("fa-moon");
    //      }
      
    
})