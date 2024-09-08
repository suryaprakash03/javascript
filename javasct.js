/*three types of variable in js
*var   --> old type.redeclare,hoisting(name="surya" assign panitu athuku kela var name declare.crt work agum hoisting means declaration elam top poirum automatically)
let    -->not possible to redeclare,nohoisting,block scope
const  -->not possible to redeclare,reassign,nohoisting,block scope
*/
a = "surya prakash";
console.log(a);
var a;            // for showing hoisting.it does not work using let,const declaration

var a = 1;
var a = 2;
console.log(window.a);  // for showing redeclare.var is a global scope.window is global object so you can access the var a

// textformatting
function change()
{
    document.getElementById("name").innerText="surya prakash";
    document.getElementById("name").style.color="blue";
}
//particular image area as a link
function imagefm()
{
    console.log("map works");
}
let c = 0;
for_test();
function for_test()
{
    c = 1;
}
console.log(c); //var inside function change affect the global not possible with let and const"
console.log("A"<"a"); //comparision operator is also works in strings.compares numerically
console.log(10+10+"10");//2010

let d;
console.log(d); //without assigning a value it treats as undefined type
let e="";
console.log(typeof(e));//empty string not null
console.log(0 == false);//same like python

/*objects in js*/
const obj = {firstname:"surya",lastname:"prakash",funcname:function(){return this;}};
console.log(obj.firstname+" "+obj.lastname);
/*this keyword*/
function useofthis()
{
    return this;
}
console.log(useofthis()); //inside function this keyword refers to the global object
console.log(obj.funcname());// inside object definition this points to the entire object
/*stings in js*/
let f = `psp
         is best`;
console.log(f);  //backtick for string multiline also you can use inside both '' and ""
let g = "surya";
g[0]="a";
console.log(g); // in javascript strings are immutable 
console.log(g.length);
console.log(g.charAt(0));
console.log(g.substring(0,2));
console.log(g.slice(0,2));
console.log(g.replace("u","U"));
/*12/3/24*/


