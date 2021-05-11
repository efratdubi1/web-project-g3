const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

// ------------------------תפריט צד-------------------------

function openNav() {
  document.getElementById("sideNavigationBar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "-250px";
}

function closeNav() {
  document.getElementById("sideNavigationBar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

//----------------------- close side nav When the user clicks anywhere outside ------------

const sideNavigationBar = document.getElementById('sideNavigationBar')
const main = document.getElementById('main')
const TopNav = document.getElementById('TopNav')
const footer = document.getElementById('footer')

document.onclick= function (e){
  if((e.target.id == 'main' || e.target.id == 'footer') && e.target.id != 'sideNavigationBar' && e.target.id !='TopNav' ){
    document.getElementById("sideNavigationBar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
}
// ------------------------footer-------------------------
function goToPage(id,h){
  document.getElementById(id).href=h;
}
function changePointer(id,cur){
  document.getElementById(id).style.cursor=cur;
}