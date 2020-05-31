//'use strict';
//AutoUpdating the Year of Copyright
const x = new Date();
const currentYear = x.getFullYear();
const copyrightYear = document.getElementById("the-year");
copyrightYear.innerHTML = currentYear;

//The ReadMore-ReadLess Button

var ReadButton = document.querySelectorAll(".ReadBtn");
var hiddenText = document.querySelectorAll(".hide");
var dots = document.querySelectorAll(".dots");
//console.log(hiddenText)
//console.log(ReadButton);
for(var i = 0; i<ReadButton.length; i++){
ReadButton[i].addEventListener("click", ShowText);
//ReadButton[i].style.display = "none";
}
function ShowText()
{
  for(var i = 0; i<hiddenText.length; i++){
    //console.log(hiddenText[0])
    hiddenText[i].classList.remove("hide");
  }
  for(var i = 0; i<ReadButton.length; i++){
   // console.log(ReadButton[i]);
    ReadButton[i].style.display = "none";
}
  for(var i=0; i<dots.length; i++){
    dots[i].style.display = "none";
  }
}


//SHARE BUTTON
//Getting all share buttons
const shareBtn = document.querySelectorAll(".share");
//console.log(shareBtn);
for(var i=0; i<shareBtn.length; i++){
  shareBtn[i].addEventListener("click", shareApi);
}
//Auto-generating url for each news post ie div
function shareApi(event){
  var TheClickedBtn = event.target.parentElement;
  var gettingHref = TheClickedBtn.getAttribute("href");
  gettingHref.toString;
 //console.log(gettingHref)
  var TheUrl = "https://weareuganda.com"+gettingHref; 
 // console.log(TheUrl)
  
//calling webshare API
if(navigator.share){
  navigator.share(
      
    {
      title: 'webshare Api exmple',
      url: TheUrl ,
      text: 'We are Uganda News'
    }
  ).then(
    () =>{
      console.log("Thanks for sharing");
    }
  )
  .catch(console.error);
}
else{
  console.log("not supported");
}
}
