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


function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}