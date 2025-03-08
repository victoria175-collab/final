var copyBtn = document.getElementById('copy');
getPassword();
copyMdp();

function getPassword(){
 var chars="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var PasswordLength= 16;
 var password= "";

 for(let i = 0; i < PasswordLength ; i++){
  let randomNumber = Math.floor(Math.random() * chars.length)

  password += chars.substring(randomNumber , randomNumber + 1)


  document.getElementById('password').value = password;


  copyBtn.style.background="#6c757d";
  copyBtn.style.color="#fff";
 }
}

function copyMdp(){
  var inputPassword = document.getElementById('password');
   
  if(inputPassword.value.length == 16){
    inputPassword.select();
    document.execCommand("copy");

    copyBtn.style.background = "transparent";
    copyBtn.style.color = "#000"

   alert('Mot de passe copié !')
  }else{
    alert(' veuillez générer un Mot de passe');
  }
}
