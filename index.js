"use strict";
//AutoUpdating the Year of Copyright
const x = new Date();
const currentYear = x.getFullYear();
const copyrightYear = document.getElementById("the-year");
copyrightYear.innerHTML = currentYear;
