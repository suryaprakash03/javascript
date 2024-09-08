//recursion on nested objects is best rather than iterate over looping takes huge nesting
// const obj={
//     language:{web:{1:"html",2:"css",3:"javascript"},program:{1:"c",2:"java",3:"python"}}
// }
// for(let key in obj)
// {
//     for(let ke in obj[key])
//     {
//         for(let k in obj[key][ke])
//         {
//             console.log(obj[key][ke][k]);
//         }
//     }
// }
// function rec(ob)
// {
//     for(let key of Object.keys(ob))
//     {
//         if(typeof ob[key] === "object")
//         {
//             console.log(key);
//             rec(ob[key]);
//         }
//         else
//         {
//             console.log(key);
//         }
//     }
// }
// rec(obj);
//--------------------------------------------------
//rest and spread parameter.rest is used for storing the last excess argument as a array of values placed last in the function definition,spread is used to extract the array or iterable make a list of arguments and send to the function as normal argument(max like function requires array of aruguments).
//[...spread] makes the spread to form list.then [] helps to form array or object.it is also used to copy the array and objects
// let s = "arukani";
// console.log(...s);   //makes a list of parameters "a","r"
// console.log([...s]);// it changes the parameter value to array of values['a','r',]

// let mouse={0:"button",1:"button"};
// let mouse1={...mouse};// you can assign it to the another variable for copying.that makes them separate object
// console.log(mouse == mouse1); //this is different assign.mouse1=mouse results true as they share the common object works same for array also
//--------------------------------------------------
// var used in old times it has a block,global scope not having function scope{}.global in browser is a window object that can be accessed anywhere.
// without let and const it will be treated as var,the function can be called before declaration same rules for var.
//lexical environment is an imaginary object that stores the variable,function values when its created.
// var a = 10;
// console.log(window.a);//always points the global scope;
function num(a,...b)
{
    b = 20;
    console.log(b);
    var b;//it executes first even without this line there is no prb it treats like a var
}
num(1,2,3);
//functions are objects in js.they have built in methods for getting function name and number of paramters 
// functions have properties name returns the function name,length returns the number of arguments.
console.log(num.name);    //num
console.log(num.length); // it does not take the rest in count // 1
//named function expression a function can call itself.
let c = 0;
let show = function display()
{
    if(c < 2)
    {
        console.log(c);
        c++;
        display();  // named function expression is used when a function object has two reference g,show.inside function if we have recurssion occurs incase of show=null the name function display() helps to run.while show gives error that reference becomes null here nfe helps
    }
    else
    {
        c = 0;
    }

}
let g = show;
g();
show = null;
g();
//-----------------------------------------------------
//functions can be created using the new keyword.this type of function takes string as an function
// A function can also be created by new function(string or function) these type of functions are created with the run time Data.
// settimeout and setinterval clearTimeout(timerid) and clearinterval(timerid returns from the settimeout function) are used to stop the Delay
// A nested settimeout recursion call used in the server side situation checks and format the delay time according to the curret situation
let fun = new Function('a','b','return a+b');
console.log(fun(2,2));
setTimeout((s)=>{console.log(s)},1000,"surya");//we can also give arguments in last
let timerid=setInterval(()=>{console.log("*")},1000); // it occurs concurrently
setTimeout(() => {
    clearInterval(timerid); //cleartimeset() for settimeout.stops the function at certain time
},3000);
//-------------------------------------------------------
// decorator are wrapping function gives additional functionality to the same function
//multiply by 2 for eg
let obj = {};
function showd(num)
{
    num = num * 2;
    return num;
}
function decor(fn)
{
    return function(x)
    {
        if(obj[x])
        {
           console.log(obj[x]+"again");  
        }
        else
        {
            obj[x] = fn(x);
            console.log(obj[x]);
        }
    }
}
showd = decor(showd);
showd(1);
showd(1); 
// the above function is caching.for the first time we check the x variable if not add it to the object with the key value pair.on next time it does not call the showd() instead function it returns the object key value pair for the same argument
//for accessing an object function or borrowing the object function.you can use fun.call(this,aruguments),fun.apply(this,[]) the second parameter must be an array
//when i want to pass an object function to another function.passed function did not have the access to get the properties of the object for that we use bind keyword
const objptl={
    name:"surya N",
    tell()
    {
        console.log(this.name);
    }
};
function pass(fn)
{
    let f=fn.bind(objptl);      //if you remove the bind keyword it does not know the name property inside that object
    f();
}
pass(objptl.tell)
//-----------------------------------------------------------                 
