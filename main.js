function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560, 125);

    poseNet = ml5.poseNet(video, function () {
        console.log("PoseNet is ready!");
    });
    poseNet.on("pose", GetPoses);
}

function GetPoses(Results) {
    console.log(Results);
}