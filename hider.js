/*
Just draw a border round the document.body.
*/
// console.log("hiiiiiiiii");
document.body.style.border = "5px solid red";

// document.body.style.mbtit ="{ display: none }"
// document.getElementById("undervideomenu").style.display = "none";
// document.body.style. #undervideomenu h1 a { display: none }

var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = "span.title { display: none !important;} .title-container { display: none !important;} .mbtit { display: none } #undervideomenu h1 a { display: none }";
document.body.appendChild(css);

document.title = " "
