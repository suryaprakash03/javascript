
console.log(this.a);//here this points to the window object.and it prints a as undefined.but it does not throws any error it is called hoisting.before declaration u can use variable
var a = 10;
function show()
{
    console.log(a);
}
show();
//the function show creates a new execution context and pushed to the call stack.after execution it pops out from the call stack
function one()
{
    let x = 20;
    function two()
    {
        console.log(x);
    }
    return two;
}
let y = one();
y();
//the above is a closure.a closure in js is a function that binds the lexical environment of the parent function
//you can nest many functions inside closure.the innermost access all the parent variable outside
setTimeout(() => {
    console.log("callback function allows you to perform async operation")
},1000);
//a function that can be called later is called callback function
// call,apply,bind these functions are used to bind the object to the function.
let obj = 
{
    name:"surya"
}
function objbindfn()
{
    console.log("this is my first name "+this.name);
}
objbindfn.call(obj);
let cfn = objbindfn.bind(obj);
cfn();//bind method returns the whole function
//you can polyfill the bind method
//debouncing is used to check the time interval between consecutive functions call to call external api(search bar in flipkart website)
let timerid;
function debounce()
{
    clearTimeout(timerid);
    timerid=setTimeout(()=>{
      callfordb();
    },500);
}
function callfordb()
{
    console.log("fetching data");
}

