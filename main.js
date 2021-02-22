var mouseEvent="Empty";
 
var last_position_of_X,last_position_of_Y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="grey";
width_of_line=2;
Radius=30;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;
Radius=document.getElementById("Radius").value;
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{      
    console.log("mousemove")       
    current_position_of_mouse_X=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_Y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown")
  {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.moveTo(last_position_of_X,last_position_of_Y);
    ctx.arc(current_position_of_mouse_X, current_position_of_mouse_Y, Radius, 0, 2 * Math.PI);
    ctx.stroke();
  }

}