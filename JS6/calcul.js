var nb1 = document.querySelector('.nb1');
var nb2 = document.querySelector('.nb2');
var op = document.querySelector('.op');
var message = document.querySelector('.message');
var score = document.querySelector('.score');
var link = document.querySelector('.link');
var section= document.querySelector('section');
var compteur = 0;

random1 = Math.random() * 11 << 0;
random2 = Math.random() * 11 << 0;
console.log(random1);
console.log(random2);
nb1.innerHTML = random1;
nb2.innerHTML = random2;

function verification(){
  var res = document.querySelector('.res').value; 
  if(random1 + random2 == res){
    message.style.background = "green";
    message.innerHTML = "correcte.";

        random1 = Math.random() * 11 << 0;
         random2 = Math.random() * 11 << 0;
         console.log(random1);
         console.log(random2);
         nb1.innerHTML = random1;
         nb2.innerHTML = random2;
         compteur = compteur + 1;
  }
  else{
    message.style.background = "red";
    message.innerHTML = "Vous avez perdu.";
    section.innerHTML = "";
    score.innerHTML = ` <span>${compteur}</span></br> score`;
    link.style.display = "block";
  }
}

