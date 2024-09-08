// there are 7 primitive datatypes Number,string,boolean,bigint,null,undefined,symbol
//**numbers**/
// let a = 3.6;
// let b = 3.5;
// console.log(Math.floor(a)); // 3
// console.log(Math.ceil(a)); // 4
// console.log(Math.trunc(a)); // removes the decimal part
// console.log(Math.round(b)); // 5 and above goes to 4
// //1e3=>1000 
// //1e-3 => 0.001
// //to round to the fixed precision
// let c = 3.456;
// console.log(c.toFixed(2));
// // isNaN() checks the value is not a number , isFinite() checks the value finite
// let d = "100px";
// console.log(parseInt(d)); //it returns untill given valid number 100
// let e = "12.3.2"
// console.log(parseFloat(e)); // 12.3 valid float
// //Math object gives many builtin functions like random(),max(),min(),power(2,10)=>1024
// console.log(Math.max(1,2));//no sum() is available => 2
// let f = 1_00_000; //we can also use underscore here to seperate zeros for easy reading
// console.log(f);
//---------------------------------------------
/**Strings*/
// let g = `backticks
//          for multi line string`;
// console.log(g);
// let h=g.at(-1); //at function uses - index also
// let i=g.slice(1,4); //slice is best to get a part of the string where the last index is not considered
// console.log(h+i); //gack
// let j=g.indexOf("surya"); //if the string is not found it returns -1
// console.log(j);
// let k="surya";
// let l="Surya";
// console.log(k == l); //case is important s > S
//----------------------------------------------
// /**Arrays*/
// let a=[1,2,3];
// a.push(4);      //last append
// a.shift();      //example for queues.first pop
// console.log(a);
// a.unshift(1);  //first append
// a.shift();     //first pop.pop() last element pop.example for stack
// console.log(a);//shift,unshift is used in front,pop,push is used in last.shift and unshift takes higher time because it handles with index moving.
// a.length=2;
// console.log(a); //the length property is also used to remove the items if we shorten.[2,3] a[3]==undefined
// arrays are of type object copy by reference
// splice is a special method that can do all insert and delete
// a.push(4,5);
// console.log(a);
// a.splice(0,2,3); // starting index , how many elements to be deleted , after deleting replace the number.
// console.log(a);
// //----------------------------------------------
// //searching in array
//  let b = [5,6,7,8];
// console.log(b.indexOf(5)); // 0
// console.log(b.includes(5)); // true checks the value inside the array.returns boolean
// for(let c of b)
// {
//     console.log(c); //5,6,7,8
// };
// b.forEach((item,elem,array) => {
//     console.log(`${elem} is in the index position${item}`); //here array means entire array
// });
// let res = b.find((e)=>
// {
// if(e > 6)
// {
//    return e;
// }
// });//same syntax like for each
// console.log(res); //find returns the single item
// //the filter function is same but it returns an result array
// let res1 = b.filter((e)=>
// {
//     if(e > 6)
//     {
//         return e;
//     }
// });
// console.log(res1); //filter returns the []
// b=b.map((e)=>{
//   e=e+1;
//   return e;
// });
// console.log(b); //6,7,8,9  //used for modification in the array
// let s = b.reduce((sum,v)=>{sum=sum+v;
//                             return sum;});
// console.log(s);
//----------------------------------------------
// /**sorting */
// let a = [1,2,15];
// console.log(a.sort()); // it does not work crt here [1,15,2] it converts to string and gives wrong result.!!this need further reading.
// //for arrays for..of,foreach,map,find,filter,reduce,sort,reverse loop function available
//to check the array type we cannot use typeof instead we use isArray() returns boolean value
//let c = [1,true,"surya",{key:value},function(){}]; //all types is possible in js array
//-----------------------------------------------
/**maps*/
// object has the key converted into string.in json the key must be string.in map the key can be any datatype
// In map the datatype of the property of an object never converted into string.object properties are converted into strings by default
// Object.fromEntries for converting the array like  to object(AFO),entries for converting object to array like(key,value) structure for creating map(OeA).
// A set is same like python only holds the unique value.
// let m = new Map();
// m[true] = "string datakey"; //this wont work it is not an object
// m.set(false,"boolean datakey");
// console.log(m);
// const map = new Map([[1,"one"],[2,"two"]]);
// map.set(true,"boolean");
// map.set(1,"one");
// console.log(map);
// console.log(map.get(1));    //other methods are has(),delete(),clear(),size()

// const obj=Object.fromEntries(map);   //converts map to objects
// console.log(obj);

// const arr = Object.entries(obj);   // obj to array like form
// const ma = new Map(arr);           //array like form to map
// console.log(ma);


// const set = new Set([1,2,3,3,4]);
// console.log(set.size);     //other methods add(),has(),delete(),clear(),size()
//-------------------------------------------
//weakmap,weakset is storing object as a key in a map.when the key object deleted the weakmap key object is also deleted.this is not possible in normal map.in which the key object still reference the object on deletion also.
// let m = new Map();
// let ob = {"key":"value"};
// m.set(ob,"value");
// console.log(m.get(ob));
// ob=null;
// console.log(m); //here object is still points to value after setting object to null

// let wm = new WeakMap();
// let obj = {"key":"value"};
// wm.set(obj,"value");
// console.log(wm.get(obj));
// obj=null;
// console.log(wm); //here its removed when object removed
//weakset
//it is also used for storing object when deleted outside it removes inside from the set.
//weakmap,set does not contain has,clear,size functions like normal map and set
//----------------------------------------------
//array,object destructuring
// let ar=[1,2,3,4];
// let[o,t,...th]=ar;  
// console.log(...th);

// const obj={name:"psp",rollno:159};
// let{rollno,name:n}=obj; // the variable and object key must be same. the order does not matter.for changing the variable to another variable use :(name)
// console.log(n);
//------------------------------------------------
//age calculator
let cd = new Date();
let ed = document.getElementById("date").value;
cal(); //in js function declared functions can be called before declaration
function cal()
{
    let c = cd.getFullYear();
    console.log("*");
    // let e = ed.getFullYear();
    // let r = c -e;
    // console.log(r);
}







