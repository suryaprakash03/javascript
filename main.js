// let a = "surya"
// function letscope()
// {
//    let b = "prakash";
// }
// letscope();
// console.log(b);//throws err b is defined inside the local scope
// --------------
// let obj =
// {
//    k1:"sun",
//    key:function () {console.log(this.k1);}
// };
// obj.key();
// obj inside arrow function use pani same object key access pana mudiyathu
// --------------
// function Consobj(a,b)
// {
//     this.a=a;
//     this.b=b;
// }
// let obj = new Consobj(1,2);
// console.log(obj);
// another way of creating object the new keyword is important
//--------------------
// let m = new Map([[true,"one"],[false,"zero"]]);
// let obj = Object.fromEntries(m);  map -> object
// console.log(Object.entries(obj)); object -> array like form
//-------------------
// let obj = {key:"value"};
// console.log(Object.getPrototypeOf(obj));
// ------------------