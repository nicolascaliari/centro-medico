const div = document.getElementById('top-bars');

const nav = document.getElementById('nav');

openedNav = false;

div.addEventListener("click",()=>{
    if(!openedNav) {
    nav.style.animation = "aparecer 1s forwards";
    openedNav=true;
    } else {
        nav.style.animation = "desaparecer 1s forwards";
        openedNav=false;
    }

})