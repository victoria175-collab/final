const contenantChoixOrdinateur = document.getElementById('choix-computer');
const contenantChoixUtilisateur = document.getElementById('choix-user');
const contenantResultat = document.getElementById('resultat');

const choixPossibles = document.querySelectorAll('button');
let choixUtilisateur
let choixOrdinateur
let resultat
choixPossibles.forEach(choixPossible => choixPossible.addEventListener('click',(e)=>{
 choixUtilisateur =  e.target.id ;
 contenantChoixUtilisateur.innerHTML = `<img src="${choixUtilisateur}.png">`;
 generer_choix_Ordinateur()
 verification()
}));


function generer_choix_Ordinateur(){
 random = Math.floor(Math.random() * 3) + 1;
  if(random === 1){
    choixOrdinateur = "pierre";
  }
  if(random === 2){
    choixOrdinateur = "papier";
  }
  if(random === 3){
    choixOrdinateur = "ciseaux";
  }
   contenantChoixOrdinateur.innerHTML = `<img src="${choixOrdinateur}.png">`;
}

function verification(){
  if(choixUtilisateur == choixOrdinateur){
    resultat = "Egalité !";
  }
              // joueur gagne
  if(choixUtilisateur == "pierre" && choixOrdinateur == "papier"){
    resultat ="perdu !";
  }
  if(choixUtilisateur == "papier" && choixOrdinateur == "ciseaux"){
    resultat ="perdu !";
  }
  if(choixUtilisateur == "ciseaux" && choixOrdinateur == "pierre"){
    resultat ="perdu !";
  }
          // joueur perd
   if(choixUtilisateur == "pierre" && choixOrdinateur == "ciseaux"){   
    resultat = "Gagné !";
  }    
    if(choixUtilisateur == "ciseaux" && choixOrdinateur == "papier"){   
    resultat = "Gagné !";
    }  
    if(choixUtilisateur == "papier" && choixOrdinateur == "pierre"){    
    resultat = "Gagné !";   
    }

    contenantResultat.innerHTML = resultat;
}