noseX = 0
noseY = 0
difference = 0
Rw = 0
Lw = 0

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(400, 170);

    canvas = createCanvas(550, 500);
    canvas.position(1000, 170);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet has been initialized!");
}

function draw(){
    background('#CBC3E3');   
        document.getElementById("square_side").innerHTML = "Width and height of the square is = " + difference + "px";
        fill('#f598c5');
        stroke('#eb1c80');
        square(noseX, noseY, difference);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
 

    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("Nose position = " + noseX + "and" + noseY);

    Rw = results[0].pose.rightWrist.x;
    Lw = results[0].pose.leftWrist.x;
    difference = floor(Lw - Rw);
    console.log("Right wrist =" + Rw + "Left wrist = " + Lw + "Difference = " + difference);
    }
}