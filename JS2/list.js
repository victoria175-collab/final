var addToDoButton = document.getElementById('addToDo');
var ToDocontainer = document.getElementById('ToDocontainer');
var inputField = document.getElementById('inputField');

addToDoButton.onclick = function(){
  var paragraph =document.createElement('p');
 if(inputField.value != ""){

 paragraph.innerText = inputField.value ; 

 paragraph.classList.add('paragraphe_style');
 
 ToDocontainer.appendChild(paragraph);

 inputField.value = "";
 }
 paragraph.addEventListener('click',function(){
  paragraph.classList.add('paragraph_click');
 })

  paragraph.addEventListener('dblclick',function(){
    ToDocontainer.removeChild(paragraph);
 })
}