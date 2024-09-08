// three types variable use.var,let,const.var is used in older times
// "use strict";
// var a = "surya"; //  var=>redeclare,hoisting(declare munadiye use)
// let b  = "Surya"; // let=>noredeclare,nohoisting,reassign     **blockscope block declare pana { inside only access }
// const c = "SUrya";// const=>noredeclare,nohoisting,noreassign **blockscope
// //scopes
// console.log(window.a); //var points to global scope
// if(true)
// {
//     b = "don"; //let redeclare
// }
// console.log(b);
// always use let and const.
//------------------------------------------
// console.log(typeof(a)); //typeof is used for checking the datatype of a value return string
// console.log(Boolean(a)); String() Number() for type conversion
// let b=true;
// let c=false;
// console.log(+b + +c) + unary operator converts all type to number has the higher precendence.= assignment operator has the lower precendence so it executes lastlty // 1
// let d=(b,c);
// console.log(d) the comma opertor returns the last operation value it has very low precedence than equal sign it returns c value
// ------------------------------------------
// var a = alert("ready for a question?");  //undefined does not return anything
// var p = prompt("what is your favourite language","eg:html,css");
// confirm(`${p} is a good language to learn ${a}`); // return boolean
//------------------------------------------
// ***strings***
// let e="string";
// console.log(e.length);
// e.length = 4;
// console.log(e); //reducing length here does not take affect
// console.log(e.toUpperCase());
// console.log(e.substring(0,3));
// e[0]="t";
// console.log(e);  // strings are immutable in js cannot able to convert to 't'
//------------------------------------------
// **Arrays**/
// let f=[1,"array",{key:"value",1:"one"}]; //js array are of type object.it can store different values inside it
// f.push("push");
// console.log(f.length); //**length is same for both array and string
// f.length = 3;
// console.log(f);        //here length reducing deletes the element
// let g=f.pop(); //pop removes the last element
// console.log(g);
// f.unshift("0");
// console.log(f[0]);  //unshift and push add the elements front and back of the array.for hint push contains u so unshift.
// //------------------------------------------
// label:for(let i=0;i<2;i++)
// {
//     for(let j=0;j<2;j++)
//     {
//         if(i == j)
//         {
//             console.log(i,j);
//             break label;
//         }
//     }
// }
// console.log("applied breakpoint");
// we use the label to close out from the outer loop.label always placed above the break.we can also use continue keyword to skip the current execution.break,continue,labelname: any name i can give inplace of labelname:
//------------------------------------------
//**loops general while,dowhile,for.same as like java only difference not int i -> let i**/
// let a = "1";
// switch(a)
// {
//     case 1 : {console.log("not executed");}
//     case "1" : {console.log("it executes because switch uses strict checking ==="); break;}
//     default :{console.log("runs default");}
// }
//------------------------------------------
/**functions */
// function show(val,defa="two")
// {
//     console.log(`this is function declaration ${val} ${defa}`); //for value thats not passing it takes as default.
// }
// show("one");
// let f = function () {console.log("this is function expression");}
// f(); // we can give function as a value to a variable
// let arrow = (a,b) => { 
//     let c=a+b;
//     return c; } 
// console.log(arrow(1,2)); // if it block of code use return
// let arroww = (a,b) => a+b;
// console.log(arroww(1,2)); // if it is a single line no need for return statement
// arrow functions this keyword points to the parent properties
// let obj = {};
// obj.k = "value";
// obj.fun =
// function testing()
// {
//     console.log(this.k);  //normal functionla this points to window object.when its a property of object this points to the object
//     let iar = () => {console.log(this.k);}; //in arrow function inside this gets from the parent.here it works 
//     iar();
// };
// obj.ar = () => {
//     console.log(this.k);  //arrow function this does not work here
// }
// obj.ar();
// obj.fun();
// //-----------------------------------------------
// json JSON.stingify to change the object into string and JSON.parse to change the json into previous form
// json sets the object properties into string and the value with "" surrouded.
// const obj1={name:"kavitha"};
// const obj={name:"narmatha",nes:{name:"palanisamy"},ref:obj1};
// obj1.ref=obj;
// let j=JSON.stringify(obj,['name','nes','ref']);//this throws error circular reference 
// console.log(j);
// let p=JSON.parse(j);
// console.log(p);


