const aboutMeLink=document.getElementById("about-me-link");
const aboutMePara=document.getElementById("about-me-para");

aboutMeLink.addEventListener('click',()=>{
  hiddencoder();
  aboutMePara.classList.add("para_visible");

  skillPara.classList.remove("para_visible");
  contactPara.classList.remove("para_visible");
  
})

////////////////////////////////////////////////////////////////////////////
const skillPara=document.getElementById("skill-para");
const skillLink=document.getElementById("skill-link");

skillLink.addEventListener('click',()=>{
  hiddencoder();
  skillPara.classList.add("para_visible");

  aboutMePara.classList.remove("para_visible");
  contactPara.classList.remove("para_visible");
})

//////////////////////////////////////////////////////////////////////////

const contactPara=document.getElementById("contact-para");
const contactLink=document.getElementById("contact-link");

contactLink.addEventListener('click',()=>{
  hiddencoder();
  contactPara.classList.add("para_visible");

  aboutMePara.classList.remove("para_visible");
  skillPara.classList.remove("para_visible");
})

////////////////////////////////////////////////////////////////////...

const coder=document.getElementById("coder");

function hiddencoder(){
  coder.classList.add("coder_hidden");
  
}

///////////////////////////////////////////////////////////////////

const navColorChange=document.getElementById("nav_container");

window.addEventListener('scroll',()=>{
  if(window.scrollY>50){
    
    navColorChange.classList.add("scrolled-nav")

  }else{
  navColorChange.classList.remove("scrolled-nav")
  }
})

