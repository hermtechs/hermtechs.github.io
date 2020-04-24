"use strict";
var readMoreBtns =document.getElementsByClassName("ReadBtn");
for(var i = 0; i<readMoreBtns.length; i++){
    var eachBtn = readMoreBtns[i];
    //console.log(eachBtn);
    eachBtn.addEventListener("click", ReadMore)
}

function ReadMore() {
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
