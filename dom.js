//global -- window object --> dom ,bom ,js
//bom -- navigator widely used to find the browser specifications
console.log(window.innerHeight);
console.log(navigator.userAgent); //gives the machine and browser spec
console.log(location.href);  //gives the current url in location object
let ul = document.body.children[1]; //childNodes counts both text and spaces,children takes element as it counts.the index starts from zero
console.log(ul.children.length); //9 4
//always use element to target only elements not nodes parentElement, children, firstElementChild, lastElementChild, previousElementSibling, nextElementSibling.
//----------------------------------------------
let l=document.querySelectorAll("li");  // selects all the elements using css selector
for(let i=0;i<3;i++)
{
    l[i].style.color="red";
}
let pl=document.querySelector("li"); // select the first element using css selector
pl.style.color="blue";
document.getElementById("heading").style.color="green";
let len=document.getElementsByClassName("underline").length;
console.log(len+"gives the full document length");//the getelementbyclassname uses live tracking checks the complete docs and gives the length
//document.getElementById("p").innerHTML="<div>this is div</div>"; //it does not change the html it makes the child element as div
document.getElementById("p").outerHTML="<div id='p'>this is div</div>" //it only does that change the whole element and adds the new one
//blinking element used to show for offer details
// let p = document.getElementById("p");
// setInterval(() => {
//     p.hidden = !p.hidden;
// },1000);
function change()
{
    let a = document.getElementsByTagName('a')[0];
    a.getAttribute("href");
    a.setAttribute("href","https://www.youtube.com/")
    a.innerText="youtube";            //onruntime we can access the attribute and change its value
}
//every dom element is also has the dom object you can add properties to the object.properties and attributes are little bit same
//--------------------------------------------
//DOM manipulation
//create an element
function display()
{
    let e = document.createElement("div");
    e.innerText = "dynamically inserted element";
    document.getElementById("dynamicins").after(e); //after,before,append,prepand
}
//style using js
document.getElementById("dynamicins").classList.add("classn");
console.log(document.getElementById("dynamicins").className);
document.getElementById("dynamicins").style.color = "red";
document.getElementById("dynamicins").style.removeProperty("color");//we can also remove a property from dom


