/*============toggle style switcher==========*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
//hide style switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*============theme colors==========*/
const alternatestyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    alternatestyle.forEach((s)=>{
        if(color === s.getAttribute("title")){
            s.removeAttribute("disabled");
        }
        else{
            s.setAttribute("disabled","true");
        }
    })
}
/*============theme light and dark==========*/
const daynight = document.querySelector(".day-night");
daynight.addEventListener("click",()=>{
    daynight.querySelector("i").classList.toggle("fa-moon");
    daynight.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        daynight.querySelector("i").classList.add("fa-sun");
    }
    else{
        daynight.querySelector("i").classList.add("fa-moon")
    }
})
