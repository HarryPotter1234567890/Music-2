song100 = "";
song200 = "";

function preload(){
song100 = loadSound("music.mp3");
song200 = loadSound("music2.mp3");
}

function play(){

}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 500);
}