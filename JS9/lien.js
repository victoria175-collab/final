// // // //   let error = document.querySelector('.error_mess');
// // // //   let longLink = document.querySelector('.long_link');
// // // //   let short = document.querySelector('.resultat');

// // // //   function shortLinkfunction(){
// // // //     if(!longLink.value == ""){
// // // //      error.innerHTML = "";
// // // //      let url = `htpps://api.shrtco.de/v2/shorten?url=${longLink.value}`;
// // // //      fetch(url);
// // // //       .then(response => response.json());
// // // //       .then(data => short.innerHTML = data.resultat.short_link);

// // // //       short.style.display="block";

// // // //      if(short.innerHTML.length == 0){
// // // //       short.innerHTML = "lien Non valide !"
// // // //       }
// // // //    }else{
// // // //       error.innerHTML = "Veuillez repmlir le champ !";
// // // //      short.style.display = "none";
// // // //   }
// // // //  }


let error = document.querySelector('.error_mess');
let longLink = document.querySelector('.long_link');
let short = document.querySelector('.resultat');

function shortLinkfunction() {
  if (longLink.value.trim() !== "") {
    error.innerHTML = "";
    let url = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longLink.value)}`;

    fetch(url)
    .then(response => response.text())
    .then(data => {
      if (data.includes('http')) {
        short.innerHTML = data;
        short.style.display = "block";
      } else {
        short.innerHTML = "Lien Invalide!";
        short.style.display = "block";
        console.error("API Error:", data);
      }
    })
    .catch(error => {
      short.innerHTML = "Erreur survenue!";
      short.style.display = "block";
      console.error("Fetch Error:", error);
    });
  } else {
    error.innerHTML = "Remplissez le champ svp !";
  }
}



