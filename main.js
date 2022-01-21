var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

 bactx=0;
 bacty=0;

 fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
     background_object=Img;

    background_object.scaleToWidth(700);
    background_object.scaleToHeight(400);
    background_object.set({
        top:bactx,
        left:bacty
    });
    canvas.add(background_object);
 });


function playSound(){
	x.play(); 
}
