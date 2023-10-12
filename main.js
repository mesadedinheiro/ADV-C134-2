objects = [];
status = "";

function preload(){
    video = createVideo('video.mp4');
}


function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    video.hide();
}