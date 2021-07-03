canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent = "empty";
color="black";
width_of_line=15;

canvas.addEventListener("mousedown",fn_mouse_down);

function fn_mouse_down(e){
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",fn_mouse_up);
function fn_mouse_up(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",fn_mouse_leave);

function fn_mouse_leave(e){
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",fn_mouse_move);

function fn_mouse_move(e){
    current_position_x= e.clientX-canvas.offsetLeft;
    current_position_y= e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){

    
    ctx.beginPath();
    ctx.moveTo(last_position_x,last_position_y);
    ctx.lineTo(current_position_x,current_position_y);
    ctx.stroke();
    }
    last_position_x=current_position_x;
    last_position_y=current_position_y;
    console.log("lastpositionx :"+ last_position_x);
    console.log("lastpositiony :"+ last_position_y);
}
