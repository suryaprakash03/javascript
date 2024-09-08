// let obj = 
// {
//     name : "internalproperty",
//     fname : "narmatha",
//     lname : "narendra prasath",
//     get fullname()
//     {
//         return `${this.fname} * ${this.lname}`;
//     },
//     set fullname(c)
//     {
//         [this.fname,this.lname] = c.split(" ");
//     }
// }
//get set is not a function is simply a property 
// obj.fullname="palanisamy kavitha";
// console.log(obj.fullname);
//--------------------------------------------
//let descriptor = Object.getOwnPropertyDescriptor(obj,"name");
//console.log(descriptor); 
//gives three internal property by default all set to true.writable,enumerable,configurable
//Object.defineProperty(obj,'name',{writable:false});
//obj.name = "kavitha"; //wont work because writable is set to false cannot able to overwrite.not possible to reassign
//here defineproperty() is used to overwrite the predefined values
//Object.defineProperty(obj,'name',{enumerable:false});
//looping support no
//Object.defineProperty(obj,"name",{configurable:false});
//unable to delete and change the other two previous settings if given before
//delete obj.name; //wont work
//Object.defineProperty(obj,'name',{writable : true}); //previous write=>false--configure false--write=>true change pana mudiyathu
//obj.name = "kavitha";
//console.log(obj.name);
//-----------------------------------------------
// let current =
// {
//     type : "ac",
//     v : "240v"
// }
// let fan = 
// {
//     speed : "medium",
//     __proto__ : current
// }
// console.log(fan.type); //ac it inherits the value from the parent class
// function pro()
// {
//     pro
//     {
//         console.log("constructor");
//         return 1;
//     }

// }
// let obj = new pro();
// console.log(obj);       //by default new function() create pandra object.that object prototype value = {constructor : samefunction} point panum
//create() creates an empty object with no upper level inheritance.normally all inbuilt function by default __proto__ set to object.object set to null.so only we can access these methods by using . sign.
// let obj1 = Object.create(null);
// let obj2 = {key : "value"};
// Object.setPrototypeOf(obj1,obj2);            //sets the prototype for one object.both the setprototypeof() and create() are generally same
// console.log(obj1.key);
// console.log(Object.getPrototypeOf(obj1));   //gets the prototype for another object
//----------------------------------------------------------
//object declaration
// let parent = 
// {
//     prop : "parent"
// }
// let baseobj =
// {
//     key : "value",       //property : value.property default convert to string
//     fullname : " ",
//     fkey : function bo(){console.log("named function expression");},
//     f1key : () => {console.log("arrow function");},
//     get name()
//     {
//         return fullname;
//     },
//     set name(f)
//     {
//         fullname=f[0]+f[1];
//     }
// }
// console.log(typeof(baseobj)); 
// baseobj.name=["surya","prakash"];              //for set and get.remember set and get are not function they are property no need to write set(),get()
// console.log(baseobj.name);
// baseobj.fkey();
// baseobj.f1key();
// console.log(Object.getPrototypeOf(baseobj));
// Object.setPrototypeOf(baseobj,parent);
// console.log(baseobj.prop);
// console.log("*******");                   //inheritance possible.object property access . or [] delete obj[]
//------------------------------------------------------
//function declaration
function fuel(v)
{
    let diesel = 90;
    return function run()
    {
        console.log(`function running:${diesel}`);
        diesel = v;
        console.log(`function running:${diesel}`);
    };
}
let obj1 = new fuel(85);
console.log(typeof fuel);
console.log(Object.getPrototypeOf(obj1));
obj1();
obj1.petrol = 100;        //we can add property to a function and access using the . operator.its not work with function inside variables they cannot be accessed outside the function only function property can be accessed
console.log(obj1.petrol);

// function normal()
// {
    
// }
// normal.pr = "normal";
// console.log(normal.pr);       //want to find the usage of new keyword in function declaration?
// console.log(typeof normal);
// console.log("*******"); 
//-------------------------------------------------------




