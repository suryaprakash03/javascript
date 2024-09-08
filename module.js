let n = "surya prakash";
export default function(){console.log("default function");};//default export -- import bracket and same name condition need not.default export export one thing in a file
function call()
{
    console.log("in module");
}; //named export -- import {name should be same name}
//if you want to export multiple function
export{call as c,n};
