var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 background_img=document.getElementById("bi");
 canvas_img=document.getElementById("myCanvas");

function new_image()
{
    background_img="hOye.gif";
    canvas_img="BirthdayImage.jpg";
}

function playSound(){
	x.play(); 
}
