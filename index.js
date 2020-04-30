"use strict";
function showSideBar(){
  const entireSideBar = document.getElementsByClassName('sidebar');
  entireSideBar[0].classList.remove("default-hide");
}

function hideSideBar(){
const entireSideBar = document.getElementsByClassName('sidebar');
entireSideBar[0].classList.add("hideit");
}
//
var readMoreBtns =document.getElementsByClassName("ReadBtn");
for(var i = 0; i<readMoreBtns.length; i++){
    var eachBtn = readMoreBtns[i];
    //console.log(eachBtn);
    eachBtn.addEventListener("click", function ReadMore(event){
     var clickedbtn = event.target;
     clickedbtn.addEventListener("click", ReadMore);
    } )
}
 
function ReadMore(event) {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
