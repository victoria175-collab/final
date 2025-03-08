let lien = document.querySelectorAll('.lien');
let all = document.querySelector('.all');
let frame = document.getElementById('frame');
let link = document.querySelector('.link');

lien.forEach(element => {

  element.addEventListener('click', function (event){
  event.preventDefault();

    all.style.display = 'none';
    frame.style.display = 'block';

    if(element == lien[0]){
      frame.innerHTML = `
      <iframe src="./JS1/chrono.html" frameborder="0" name="content" style="width:100% ; height:70vh ;border-radius:20px ; border:2px solid  rgb(0, 112, 184) ; box-shadow:0 0 15px rgba(0, 0, 0, 0.1)"></iframe>`;
    }
    if(element == lien[1]){
      frame.innerHTML = `
      <iframe src="./JS2/list.html" frameborder="0" name="content" style="width:100% ; height:70vh ;border-radius:20px ; border:2px solid rgb(0, 112, 184) ; box-shadow:0 0 15px rgba(0, 0, 0, 0.1)"></iframe>`;
    }
    if(element == lien[2]){
      frame.innerHTML = `
      <iframe src="./JS3/saut.html" frameborder="0" name="content" style="width:100% ; height:70vh ;border-radius:20px ; border:2px solid  rgb(0, 112, 184) ;box-shadow:0 0 15px rgba(0, 0, 0, 0.1)"></iframe>`;
    }
    if(element == lien[3]){
      frame.innerHTML = `
      <iframe src="./JS4/papier.html" frameborder="0" name="content" style="width:100% ; height:70vh ;border-radius:20px ; border:2px solid  rgb(0, 112, 184) ;box-shadow:0 0 15px rgba(0, 0, 0, 0.1)"></iframe>`;
    }
    if(element == lien[4]){
      frame.innerHTML = `
      <iframe src="./JS5/mot.html" frameborder="0" name="content" style="width:100% ; height:70vh ;border-radius:20px ; border:2px solid  rgb(0, 112, 184); box-shadow:0 0 15px rgba(0, 0, 0, 0.1)"></iframe>`;
    }
    if(element == lien[5]){
      frame.innerHTML = `
      <iframe src="./JS6/calcul.html" frameborder="0" name="content" style="width:100% ; height:70vh ;border-radius:20px ; border:2px solid  rgb(0, 112, 184); box-shadow:0 0 15px rgba(0, 0, 0, 0.1)"></iframe>`;
    }
    if(element == lien[6]){
      frame.innerHTML = `
      <iframe src="./JS7/code.html" frameborder="0" name="content" style="width:100% ; height:70vh ;border-radius:20px  ; border:2px solid rgb(0, 112, 184)"></iframe>`;
    }
    if(element == lien[7]){
      frame.innerHTML = `
      <iframe src="./JS8/passe.html" frameborder="0" name="content" style="width:100% ; height:70vh ;border-radius:20px ; border:2px solid  rgb(0, 112, 184);box-shadow:0 0 15px rgba(0, 0, 0, 0.1)"></iframe>`;
    }
    if(element == lien[8]){
      frame.innerHTML = `
      <iframe src="./JS9/lien.html" frameborder="0" name="content" style="width:100% ; height:70vh ;border-radius:20px; border:2px solid  rgb(0, 112, 184);box-shadow:0 0 15px rgba(0, 0, 0, 0.1)"></iframe>`;
    }
    if(element == lien[9]){
      frame.innerHTML = `
      <iframe src="./JS10 /onglet.html" frameborder="0" name="content" style="width:100% ; height:70vh ;border-radius:20px ; border:2px solid  rgb(0, 112, 184);box-shadow:0 0 15px rgba(0, 0, 0, 0.1)"></iframe>`;
    }
    if(element == lien[10]){
      frame.innerHTML = `
      <iframe src="./JS11/calculator.html" frameborder="0" name="content" style="width:100% ; height:70vh ;border-radius:20px; border:2px solid  rgb(0, 112, 184)"></iframe>`;
    }
  })
  });

 link.addEventListener('click',function (){
   frame.style.display = 'none';
   all.style.display = 'flex';
 })


document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".hamburger");
    const sidebar = document.querySelector(".container1");
    const closeIcon = document.querySelector(".close");
    const sidebarLinks = document.querySelectorAll(".liens a"); // All sidebar links
    const mainContent = document.querySelector(".container2"); // Main content area

    // Function to close sidebar
    function closeSidebar() {
        sidebar.classList.remove("show");  // Hide sidebar
        menuIcon.style.display = "block"; // Show menu icon
    }

    // Open Sidebar
    menuIcon.addEventListener("click", function () {
        sidebar.classList.add("show");  // Show sidebar
        menuIcon.style.display = "none"; // Hide menu icon
    });

    // Close Sidebar when clicking the close icon
    closeIcon.addEventListener("click", closeSidebar);

    // Close Sidebar when clicking any sidebar item
    sidebarLinks.forEach(link => {
        link.addEventListener("click", closeSidebar);
    });

    // Close Sidebar when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
            closeSidebar();
        }
    });
});




