let m = document.getElementById("mouse");
let cs = document.getElementById("combisel");
let v = document.getElementById("value");
let b = document.getElementById("ball");
//onmousedown,onmouseup,ondblclick it has event.button property to check the left(0) or right(2) click.center(1)
//modifiers means keycombination plus click(alt+click)
function combisel(event)
{
    if(event.altKey)
    {
        alert("only alt click works");
    }
    else
    {
        alert("action disable");
    }
}
function show(event)
{
    console.log(event.clientX);
    console.log(event.clientY);
    console.log(event.pageX);
    console.log(event.pageY);
}
function move(event)
{
    
    ball.style.position = 'absolute';
    ball.style.zIndex = 1000;
    document.body.append(ball);
    
    function moveAt(pageX, pageY)
    {
        ball.style.left = pageX + "px"; 
        ball.style.top = pageY + "px"; 
    }
    
    moveAt(event.pageX, event.pageY);
    
    function onMouseMove(event) 
    {
        moveAt(event.pageX, event.pageY);
    }
      
    document.addEventListener('mousemove', onMouseMove);
      
    ball.onmouseup = function() 
    {
        document.removeEventListener('mousemove', onMouseMove);
          //ball.onmouseup = null;
    };
}
//pagex,client x are the point where the event occurs