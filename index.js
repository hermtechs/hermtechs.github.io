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
/*var readMoreBtns =document.getElementsByClassName("ReadBtn");
for(var i = 0; i<readMoreBtns.length; i++){
    var eachBtn = readMoreBtns[i];
    //console.log(eachBtn);
    eachBtn.addEventListener("click", function ReadMore(event){
     var clickedbtn = event.target;
     clickedbtn.addEventListener("click", ReadMore);
    } )
}
  /*var btn1 =document.getElementsByClassName("readBtn1")
    var btn2 =document.getElementsByClassName("readBtn2")
    var btn3 =document.getElementsByClassName("readBtn3")
    var btn4 =document.getElementsByClassName("readBtn4")
    var btn5 =document.getElementsByClassName("readBtn5")
    var btn6 =document.getElementsByClassName("readBtn6")
  */

/*function ReadMore(event) {
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
  }*/
