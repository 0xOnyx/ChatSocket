window.onload = function() {
const barre1 = document.getElementById('barre1')
const barre2 = document.getElementById('barre2')
const barre3 = document.getElementById('barre3')
const menu = document.getElementById('background')
const body = document.getElementById('body')
const menuliste = document.getElementById('menu')
const menutext = document.getElementById('menuliste')



var click = 0
var background = 0 // 0 = eteind   1 = allumé
var intbackground = 0//Charge le background doit etre fait qu'une fois


menu.addEventListener('click', function(){

  if(click === 0){ //open
    open()
    openmenu()
    click = 1
    console.info("open")
    }

  else if(click === 1){ //close
    close()
    closemenu()
    click = 0
    console.info("close")
  }
  else {
    console.error("ERROR")
  }

function open(){
  barre1.style.top = "50%"
  barre1.style.transform = "translatey(-50%)"
  barre3.style.top = "50%"
  barre3.style.transform = "translatey(-50%)"
  setTimeout(function () {
    barre2.style.display = "none"
    barre1.style.transform = "rotate(40deg)"
    barre3.style.transform = "rotate(-40deg)"
  }, 70);
}


function close(){
  barre1.style.transform = "rotate(0deg)"
  barre3.style.transform = "rotate(0deg)"
  setTimeout(function () {
    barre2.style.display = "block"
    barre1.style.top = "0px"
    barre1.remove.transform
    barre3.style.top = "100%"
    barre3.remove.transform
  }, 70);
}

function openmenu(){
  menuliste.style.zIndex  = "1"
  body.style.overflow = "hidden"
  menuliste.style.display = "block"
  menuliste.style.opacity = "0"
  setTimeout(function () {
    menuliste.style.zIndex  = "98"
    menuliste.style.opacity = "1"

  }, 70);
}

function closemenu(){
  menuliste.style.opacity = "0"

  setTimeout(function () {
    body.style.overflow = "hidden"
    menuliste.style.display = "none"
    menuliste.style.zIndex  = "1"
  }, 310);
}



let backgroundParticule = document.getElementById('backgroundParticule')
let particles = document.getElementById('particles-js')



backgroundParticule.addEventListener('click',function(){
    if(intbackground === 0){
      particlesJS.load('particles-js','./fichier/particles.json',function(){
      })
      intbackground = 1
      console.log("background int")
    }
    if(background === 0){
      particles.style.display = "block"
      background = 1
      console.log('Background is ON')
    }
    else{
      particles.style.display = "none"
      background = 0
      console.log('Background is OFF')
    }
    console.log(background)
    close()
    closemenu()
    click = 0
    console.info("close")
    backgroundclick = 1
})

})//menu click



} //windows load
