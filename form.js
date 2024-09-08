//three types of load property 
// onbeforeunload send the user statics after the window closed.it send data to the server
document.addEventListener("DOMContentLoaded",()=>{alert('loading')});
window.onload = function() {alert("loading finished")};
window.onbeforeunload =function()  {alert("want to leave this site")};

console.log(document.forms['userdetails']);
console.log(document.forms[0][1]);
// index vechum form elememt target.gives the first name element
//focus,blur
document.forms[0][1].addEventListener('focus',()=>{document.forms[0][1].style.boxShadow="5px -5px 3px red"});
document.forms[0][1].addEventListener('blur',()=>{document.forms[0][1].style.boxShadow="5px -5px 3px green"});
tabi.tabIndex=0;
//this tabindex property = 0.make the <p> tag focused lastly by using tab

// range selection
//select the range of text from the p tag
let r = document.getElementById('range');
let ra = new Range();
ra.setStart(r.firstChild,4); //index for both and element always starts from zero
ra.setEnd(r.firstChild,12);
console.log(String(ra));
