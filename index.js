//'use strict';
//AutoUpdating the Year of Copyright
const x = new Date();
const currentYear = x.getFullYear();
const copyrightYear = document.getElementById("the-year");
copyrightYear.innerHTML = currentYear;

//The ReadMore-ReadLess Button
/*var hiddenText = document.getElementsByClassName("more");
for(var i=0; i<hiddenText.length; i++)
{
var eachHiddenTexts = hiddenText[i];
//console.log(eachHiddenTexts);
}

var ReadButton = document.getElementsByClassName("ReadBtn");
//console.log(ReadButton)
for(var i=0; i<ReadButton.length; i++)
{
  var eachBtn = ReadButton[i];
  eachBtn.addEventListener("click", changeDisplay)
}
var dots = document.getElementsByClassName("dots");
for (var i=0; i<dots.length; i++)
{
  var eachDots = dots[i]
  //console.log(eachDots);
}
function changeDisplay()
{
  console.log(eachDots);
   //eachDots.style.display = "none";
   // console.log(eachDots.style.display);
    if(eachDots.style.display === 'none')
    {
      eachDots.style.display ="inline";
      eachHiddenTexts.style.display="none";
      eachBtn.innerHTML = "Read more";
    }
    else
    {
      eachDots.style.display = "none";
      eachHiddenTexts.style.display ="inline";
      eachBtn.innerHTML = "Read Less";
    }
}*/
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
