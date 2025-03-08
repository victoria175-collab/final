var perso = document.querySelector(".perso");
var obstacle = document.querySelector(".obstacle");

function sauter(){
 if(perso.classList != "animation" ){
  perso.classList.add('animation');
 }
 setTimeout(function(){
  perso.classList.remove('animation');
 },500)
}
 var verification = setInterval(function(){
   var persoTop = parseInt(window.getComputedStyle(perso).getPropertyValue("top"));
  var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

   if(obstacleLeft<45  && obstacleLeft > 0 && persoTop>= 130){
  obstacle.style.animation = "none";
     alert ("Vous avez perdu!");
   }
  },1)
