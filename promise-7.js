// //callback function
// function callb(sr,cb)
// {
//       let s = document.createElement("script");
//       s.src = sr;
//       document.head.append(s);
//       s.onload = cb();
// }
// callb("jsfds-1.js",function(){ 
//                              callb("obj-2.js",function() {console.log("2")});
//                              console.log("1");
//                              });
// //promises helps to overcome the complex nesting function structure of callbacks.it takes a function as an argument that contains resolve and reject.on success it executes resolve.failure executes reject.it has .then,.catch,.finally.we can also use the promise chaining .then().then()
// function pcallb(src)
// {
//       return new Promise(
//             (resolve,reject)=>{
//               let d = document.createElement("script");
//               d.src = src;
//               document.head.append(d);
//               //islala(); //throws error
//               //reject(new Error("not a function"));      //at a time only one is executed either resolve or reject
//               resolve("successfully created");
//             }
//       );
// }
// const p = pcallb("datatypes-3.js")//on failure use reject(new Error())and get the resulted error using .catch
// p.then((result)=>{console.log(result)},(error)=>{console.log(error)}); //.then also handles the error or you can use .catch for error
// p.then(null,(error)=>{console.log(error)}); //the above line and this line can gives the same results
//p.catch((error)=>{console.log(error)});
//p.finally(()=>{console.log("executes on all times same like in try catch")});
//it also has .finally executes last.has no effect in the promise
// promises has in built method promises.all(if 1 fail all fail return array of results from promises),race(less time is executed),any(less time is execured incase error ignores),settledall
// async function rp()
// {
//       let p = setTimeout(()=>{console.log("*"),1000});
//       await p;            //await keyword executes the async operation first after completion it goes to the next line
//       console.log("**"); //without await keyword it executes first
// }
// rp();
//async function promise return rp().then()
//generators are iterables
// function* gen()
// {
//       yield 1;
//       yield 2;
// }
// let f = gen().next();
// console.log(JSON.stringify(f));
// let s = gen().next();
// console.log(JSON.stringify(s));
// //iterators for converting a non iterable object to iterators
// let range = {
//       from:1,
//       to:4,
// };
// range[Symbol.iterator] = function()
// {
//       return {
//             current: this.from,
//             last : this.to,
//             next()
//             {
//                   if(this.current <= this.last)
//                   {
//                         return{done:false,value:this.current++};
//                   }
//                   else
//                   {
//                         return{done:true,value:undefined};
//                   }
//             }
//       };
// };
// for(let num of range)
// {
//       console.log(num);
// }
// console.log(range);


