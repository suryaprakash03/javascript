//**objects**/
// let h={key:"value",1:"one"};
// console.log(h[1]); 
// . access is not possible to work here it obeys variable rules.the square [] also used to access the variable name.var name = "1" h[name] works
// h[2]="two"; //adding
// console.log(h); //if the key are number it displayed in sorted order
// delete h[2];   //for delete we use delete keyname
// console.log(h);
// console.log(1 in h); 
// in property is used to check the key is present inside the object.if "stringvalue" not present leftside it treats that as a variable value.in checks the key is present inside that object
//------------------------------------
/**object copying*/
// let a={name:"stunt"};
// let b=a;
// a.name="esp";
// console.log(b.name); 
//esp.its a single object but the address is shared between two objects.one object change affect the other object also.

// let c={};
// Object.assign(c,b);
// //here b object is copied to c object.both are different.treat them as seperate
// b.name="psp";
// console.log(c.name);
// still esp because both are different
//object.assign not works if the object property has an object value it treats both as same because the value is object so both references same here we use stucturedclone to clone the nested object

// //**structred clone**
// let d={ob:{rollno:159}};
// let f=Object.assign({},d);
// d.ob.rollno="158";
// console.log(f.ob.rollno); //here assign treats both as same
// let g=structuredClone(d); //deep cloning
// d.ob.rollno="148";
// console.log(g.ob.rollno); //still 158 not changed treat it as a seperate object

// let a = {name :"kavitha",age:"49"};
// let b = {};
// for(let k in a)
// {
//     b[k]=a[k];               //for in loop is used to loop through objects
// }
// a.age="40";
// console.log(a.age);          //this type of cloning makes them separate objects
// console.log(a == b);        //when comparing two objects it return false because these two are separate objects.if we assign a = b then the == returns true having same reference.

// let pen={color:"blue"};
// let pencil=pen;
// pen=null;
// console.log(pencil.color);
//change affects the both.but delete deletes the one reference but the other still have the reference.
//-------------------------------------------------
// declaring functions inside the objects
// const obj = {
//     name:"psp",
//     //type1
//     show:function()
//     {
//        console.log("psp");
//     },
//     //type2
//     show1()
//     {
//        console.log("psp1");
//     }
// }
// function show2()
// {
//    console.log("psp2");
// }
// // type3
// obj.key=show2;
// // obj.show();
// // obj.show1();
// // obj.key();
// for(let k in obj)
// {
//     console.log(k);  //all function name also be iterated over for loop.show function is also displayed
// }
//---------------------------------------------
// optional chaining is used to access the nested properties inside the object (?.) if the left part is exist it access the rightpart.if not it return undefined
// const obj={
//     name:"psp",
//     rollno:{first5:"1-5"},
//     display(){console.log("*");}
// }
// let a = {};
// let b = (a.key?"true":"false");
// console.log(b);
// console.log(obj.display?.());
//?.,?.() can be used to call the function
//----------------------------------------------
//symbols are used to give the property of an object a unique id that cannot be accessed.!!need to use it more
// let id = Symbol("forhash");
// console.log(id);
// let v = "value";
// let obj = {
//     [id]:"psp", //same rules like using variable in the property.
//     name:"surya prakash",
//     value:"here "value" and property must be same for access the property of an object by variable or [v]"
// };
// delete obj[id];    //you can delete symbol and access same like variable values
// console.log(obj);
// for(let key in obj)
// {
//     console.log(obj[key]);
// }//the symbol creates a unique id that is not iterable in for loop.two symbols with same name has different values
// let id = Symbol("id");
// let di = Symbol("id");
//thses both are different.the string inside the bracket is just for hashing no other use.but we can treat them same when we make the symbol global.
//----------------------------------------------
//constructor function for creating objects in another way.where the function name starts with capital letter same as class.
// function Constfunc(age,vote)
// {
//     this.age=age;
//     this.vote=vote;
// }
// const cf = new Constfunc(24,true);
// console.log(cf.age);