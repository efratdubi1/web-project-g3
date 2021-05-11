// ------------------------side nav-------------------------

function openNav() {
  document.getElementById("sideNavigationBar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "-250px";
  document.getElementById("main").style.marginRight = "200px";
}

function closeNav() {
  document.getElementById("sideNavigationBar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.getElementById("main").style.marginRight = "0";
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

// ------------------------open registration fom-------------------------
function open_Registration_Form() {
  window.open("Cooking_Class_Regisration_Form.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=500,height=600");
}
function close_Registration_Form() {
  self.close();
}

// ------------------------footer-------------------------
function goToPage(id,h){
  document.getElementById(id).href=h;
}

function changePointer(id,cur){
  document.getElementById(id).style.cursor=cur;
}
// ------------------------Typewriter in carlos story page-------------------------
let txt="לפעמים כל מה שבא לכם זה אוכל של בית...";
let i=0;
let speed= 70;

function Typewriter(){
    if(i< txt.length){
        document.getElementById("Typewriter").innerHTML += txt.charAt(i);
        i++;
        setTimeout(Typewriter,speed);
    }
}

 // ----------------------map in contact page-------------------------
function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}


//---------------------------open questions in questions page-----------------------------------

function openQuestion(name) {
  var x = document.getElementById(name);
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// ------------------------Order form-------------------------

function chooseCash(ClassAdd, classRemove){
  document.getElementById("creditCardInputs").classList.remove(classRemove);
  document.getElementById("creditCardInputs").classList.add(ClassAdd);

}

// -------------------------Paying-----------------------------

function showTotalAmount() {
  totalPrice=localStorage.getItem('totalPrice');
  document.getElementById("showingAmount").innerHTML= "₪ " + totalPrice + "  :לתשלום";
  showDateTime();
}

function showDateTime(){
  var dateTime= new Date();
  var months=[1,2,3,4,5,6,7,8,9,10,11,12];
  var m=months[dateTime.getMonth()];
  var currentDate= dateTime.getDate()+"/"+m+"/"+dateTime.getFullYear();
  var currentTime= dateTime.getHours()+":"+dateTime.getMinutes()+":"+dateTime.getSeconds();
  document.getElementById("dateTime").innerHTML=currentDate+"   "+currentTime;
  setInterval(showDateTime, 1000);
}

function checkName(id){
  var b1=document.getElementById(id).value;
  if (b1.length<=1){
    alert("שם חייב להיות 2 תווים ומעלה");
    document.getElementById(id).value="";
  }
}

function checkIDBuyer (id){
  var b1=document.getElementById(id).value;
  var b2=onlyNumbers(b1);
  if (b2.length!=9) {
    alert("תעודת זהות מכילה 9 ספרות בדיוק");
    document.getElementById(id).value="";
  }
  else{
    document.getElementById(id).value=b2;
  }
}

function checkCreditNum(id){
  var b1=document.getElementById(id).value;
  var b2=onlyNumbers(b1);
  if (b2.length<9 || b2.length>16){
    alert("מספר הספרות כרטיס האשראי נע בין 9-16 ספרות");
    document.getElementById(id).value="";
  }
  else{
    document.getElementById(id).value=b2;
  }
}

function checkCVV (id){
  var b1=document.getElementById(id).value;
  var b2=onlyNumbers(b1);
  if (b2.length!=3){
    alert("חייב להיות 3 ספרות");
    document.getElementById(id).value="";
  }
  else{
    document.getElementById(id).value=b2;
  }
}

function checkEmail (id){
  var b1=document.getElementById(id).value;
  if (b1.length<5 || !(b1.includes('@') && b1.includes('.') && b1.indexOf('@')<b1.indexOf('.'))){
    alert("כתובת דואר אלקטרוני לא תקין. חייב להכיל כרוכית ונקודה ולהכיל 5 תוים לפחות");
    document.getElementById(id).value="";
  }
}

function checkPhone (id){
  var b1=document.getElementById(id).value;
  var b2=onlyNumbers(b1);
  if (b2.length!=10 && b2.length!=9){
    alert("מספר הטלפון הוא 9 ספרות עבור קו ביתי או 10 ספרות עבור קו נייד");
    document.getElementById(id).value="";
  }
  else{
    document.getElementById(id).value=b2;
  }
}

function onlyNumbers(num){
  var ans="";
  var i;
  for (i = 0; i < num.length; i++) {
    var digit = num[i];
    if (digit=='0' || digit=='1' || digit=='2' || digit=='3' || digit=='4' || digit=='5' || digit=='6' || digit=='7' || digit=='8' || digit=='9'){
      ans += num[i];
    }
  }
  return ans;
}

function submitPayment() {
  if (checkallInput()){
    alert("התשלום בוצע בהצלחה. אישור תשלום נשלח למייל");
    window.location="mainPage.html";
    for (i=1; i<50; i++) {
    deleteItem('price'+i,'quantity'+i);
    }
  }
  else{
    alert("לא ניתן לבצע תשלום מאחר ולא כל השדות מולאו וסומנו");
  }
}


///////////////////////////////////////////////////////

function checkallInput(){
  if(document.getElementById('visa').checked || document.getElementById('mastercard').checked){
    if (document.getElementById('creditInput').value.length==0 || document.getElementById('creditCardCVVInput').value.length==0){
      return false;
    }
  }
  else if (!document.getElementById('cash').checked){
    return false;
  }
  if (document.getElementById('privateName').value.length==0 ||
      document.getElementById('surename').value.length==0 ||
      document.getElementById('buyerID').value.length==0 ||
      document.getElementById('userEmail').value.length==0 ||
      document.getElementById('Phone').value.length==0){
        return false;
      }
  if(!document.getElementById('termsButton').checked){
    return false;
  }
  return true;
}

//--------------------------------------shop-----------------------------------//

function toggleNav(e) {
  e.preventDefault();
  document.querySelector('body').classList.toggle('navOpen');
}

function increase(e) {
  const group = e.currentTarget.parentElement;
  const quantity = group.querySelector('.quantity-field');
  const nextValue = Number((quantity.value || 0)) + 1;
  quantity.value = nextValue;
  updateTotalPrice();
}

function decrease(e) {
  const group = e.currentTarget.parentElement;
  const quantity = group.querySelector('.quantity-field');
  const nextValue = Number((quantity.value) || 0) - 1;
  if (nextValue >= 0) {
    quantity.value = nextValue;
    updateTotalPrice();
  }
}

function deleteItem(e) {
  const row = e.currentTarget.parentElement.parentElement;
  let index = 0;
  let previousSibling = row.previousElementSibling;
  while (previousSibling !== null) {
    previousSibling = previousSibling.previousElementSibling;
    index++;
  }
  row.parentElement.deleteRow(index);
  updateTotalPrice();
}

document.addEventListener('DOMContentLoaded', function () {
  const plusButtons = document.querySelectorAll('.button-plus');
  for (let i = 0; i < plusButtons.length; i++) {
    const plusButton = plusButtons[i];
    plusButton.addEventListener('click', increase);
  };

  const minusButtons = document.querySelectorAll('.button-minus');
  for (let i = 0; i < plusButtons.length; i++) {
    const minusButton = minusButtons[i];
    minusButton.addEventListener('click', decrease);
  };

  const navToggles = document.querySelectorAll('.navToggle');
  for (let i = 0; i < navToggles.length; i++) {
    const navButton = navToggles[i];
    navButton.addEventListener('click', toggleNav);
  };

  const quantities = document.querySelectorAll('.quantity-field');
  for (let i = 0; i < quantities.length; i++) {
    quantities[i].addEventListener('change', updateTotalPrice);
  }

  const deleteButtons = document.querySelectorAll('.deleteButton');
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', deleteItem);
  }
});

function updateTotalPrice() {
  const quantities = document.querySelectorAll('.quantity-field');
  let sum = 0;
  for (let j = 0; j < quantities.length; j++) {
    const quantity = quantities[j];
    let priceInfo = quantity.parentElement.querySelector('.price');
    if (priceInfo === null) {
      priceInfo = quantity.parentElement.parentElement.querySelector('.price');
    }
    const price = Number(priceInfo.textContent);
    sum += (price * Number(quantity.value));
  }
  document.querySelector('#totalPrice').value =sum;
  document.querySelector('#totalPriceText').textContent ="₪ " + sum +  " סך הכל לתשלום ";
}
