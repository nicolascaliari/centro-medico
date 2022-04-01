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

 const button = document.getElementById ('button');
 const objetivos = document.getElementById ('objetivos');
 
 openedObjetivos = false;
 
 button.addEventListener('click',()=> {
  if (!openedObjetivos) {
    objetivos.style.animation = 'aparezco 1s forwards';
  openedObjetivos = true;
  } else {
    objetivos.style.animation = 'desaparezco 1s forwards';
   openedObjetivos = false ;
  }
})


 //const button  = document.querySelector('.button');
 //button.addEventListener('click',()=> {
  // alert ('di click en el boton')
 //} );