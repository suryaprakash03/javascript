// class declaration
// class human
// {
//     height = 100;
//     weight = 50;
//     constructor(v)
//     {
//        this.height = v;          //constructor is called automatically and assign the value
//     };
//     get wid()
//     {
//         return this.weight;
//     };
//     set wid(f)
//     {
//         this.weight=f;
//     };
//     walk()
//     {
//         console.log(`class running:${height}`);
//     };
// }
// let obj = new human(80);         //it call the constructor.creates an object that stores the all methods and the constructor property referes the whole class we can access using human.prototype
// console.log(typeof human);       // a class is a datatype of function
// console.log(human.prototype);
// console.log(Object.getPrototypeOf(obj)); //both are same
// console.log(obj.height);
// obj.wid=81;
// console.log(obj.wid);
//----------------------------------
class parent
{
    static k = "value";
    in = "parent";
    #pri = "private variable";        //private field should be prefixed with # sign.after inheritance it cannot be accessed from child class.only access from its own class
    _pro = "protected variable";     //protected field prefixed with _.can be access from child class
    constructor()
    {
        console.log("constructor parent-1");
        console.log(`${this.in}`)     //the parent constructor always uses its own field value, not the overridden one that rule only suitable for field value not for methods.during execution the child field values are not created at that time so the parent constructor uses its own field value
        this.show();  //here it call the child method
    }
    show()
    {
        console.log("parent-4");
    }
    static display()
    {
        console.log("static method");
    }
}
class child extends parent
{
    ins = "child";
    constructor()
    {
        super();          //we need to call the super() constructor before calling other parent methods.in java it does automatically in js dont.the reason child class cannot create the own this.with the help of parent only it creates its own this in child constructor
        super.show();    //before this line i need to call the parent constructor
    }
    show()
    {
        console.log("child-3");
    }

}
let c = new child();
console.log(child.k);      //static field same in java can be accessible from inherited class
child.display();           //static method.both field and method should be prefixed with static keyword and can be access from class name
//[[homeobject]] this property returns the function creation object.where the function creates.while calling the function internally finds the method creation and runs accordingly.
console.log(c instanceof parent); //used to check the object is generated from that class
//-------------------------------------
//error-handling
//try catch finally for debugging the script
// try
// {
//     a;
//     console.log(a);
// }
// catch(psp)   // err object it may be in any name psp,esp
// {
//       console.log(psp.name); // name of the error.the err object conatins two properties name,message.
// }
// finally
// {
//     console.log("it executes all the situation try-catch-finally,try-finally");
//     throw new Error(); // some builtin class are also available for specific error type.throwing error manually is called rethrow
// }