img="";
bb.io="";
object=[];
function preload(){
}
function setup(){
canvas=createCanvas(600,600);
canvas.center();
video=createCapture(VIDEO);
video.hide;
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("bb.io").innerHTML="status:finding/lost baby";
}
function modelLoaded(){
    console.log("modelLoaded"); 
    status=true;
    objectDetector.detect(video,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object=results;
}
function draw(){
image(video,0,0,600,600);
if(status!=""){
    objectDetector.detect(video,gotResult)
   for(i=0;i<object.length;i++){
       document.getElementById("status").innerHTML="status:baby is safe";
fill("#FF7000");
percent=floor(object[i].confidence*100);
text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
noFill();
stroke("#FF7000");
rect(object[i].x,object[i].y,object[i].width,object[i].height);
   } 
}
}