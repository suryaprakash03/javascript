//three types event handle 
//attribute function onclick="fn()"
//function name access
function display()
{
    console.log(2);
}
function show()
{
    console.log(3);
}
let id = document.getElementById("idaccess");
id.onclick = show;
id.addEventListener("click",(event)=>{console.log(event.type +" "+event.clientX +","+ event.clientY + " " + event.target)});//this is important function it has event object that contains usefull information
//we can also pass object instead of function but that objects have handleEvent() method to handle events
//capture,taget,bubble
let obj = {
    handleEvent()
    {
        console.log("object as a parameter");
    }
}
id.addEventListener("click",obj); //removeEventListener() that removes listner
//event deligation means instead of giving seperate onclick for all li element under ul.we can check where the event happen and style the element accordingly using event.target.it reduce the code size
document.getElementById("eventdeligation").onclick = function (event){
    if(event.target.tagName == "LI")
    {
        event.target.style.color = "red";
    }
    else
    {
        console.log(event.target.tagName);
    }
}
//you can restrict the browser default action by using event.preventDefault().eg anchor tag not possible to go to next site,right click not open the context menu are few examples

