const modeChanger = document.getElementById("modeChanger");
const BG = document.getElementById("BG"); //Body tag 
const rootBG = document.getElementById("root-element"); //HTML tag
let clicked = 0;

modeChanger.addEventListener("click", function(){
  if (clicked == 0){
    console.log("Dark mode");
    // modeChanger.innerHTML = '<i class="ri-sun-line"></i>';
    BG.style.backgroundColor = "black";
    rootBG.style.backgroundColor = "black";
    BG.style.color = "white";
    clicked = 1;
  }else{
    console.log("Light mode");
    BG.style.backgroundColor = "white";
    rootBG.style.backgroundColor = "white";
    BG.style.color = "black";
    clicked = 0;
  }
})

// you will have to use class targeting element for perfect black and white mode 

//Animating Website
const tl = gsap.timeline();
tl.from(".logo",{
  x:-100, 
  color:"red", 
  delay:0.4,
  // yoyo:true, repeating smoothly
  opacity:0,
  // repeat:-1  infinite Repeat 
})

tl.from(".nav-links, .mode-changer",{
  x:100, 
  color:"red",  
  delay:0.3,
  // yoyo:true, repeating smoothly
  opacity:0,
  // repeat:-1  infinite Repeat 
})
tl.from("#profile-pic",{
  scale:0, 
  delay:0,
  opacity:0,
  // repeat:-1  infinite Repeat 
})
tl.from(".section__text, .text",{
  y:200, 
  delay:0,
  opacity:0,
  // repeat:-1  infinite Repeat 
})
tl.from("h4",{
  opacity:0,
  scale:0,
})
tl.to("h4",{
  y:30,
  repeat:-1,
  yoyo:true,
  duration:1
})
tl.from("#About .title",{
  y:-100,  
  delay:0.3,
  opacity:0,
  scrollTrigger:{
    trigger:"#About .title",
    scroller : "body",
    // markers:true, just for check the start and end scroll bar
    start:"top 20%", 
    end:"top 5%",
    scrub:2
  }
})



