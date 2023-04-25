noseX = 0;
noseY = 0;

function preLoad() {
mustache_img = loadImage("mustache.jpeg");
}
                                               
function draw() {
    image(video, 0, 0, 300, 300);
    image(mustcahe_img, noseX, noseY, 30, 30);
}

function setup() {

canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();
posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotpose);

}

function modelLoaded() {

    console.log("PoseNet has been initialized");

}

function gotpose(results) {
    if(results.length > 0) {

    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
   
  
    }



}


function Snap() {

save("Filter.png");

}