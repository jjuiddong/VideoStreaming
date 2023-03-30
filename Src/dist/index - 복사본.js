"use strict";
console.log("start video streaming");
// entry point
function main() {
    let body = document.querySelector('body');
    if (!body)
        return;
    var camera = document.getElementById("camera");
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then((stream) => {
        if (camera instanceof HTMLVideoElement) {
            camera.srcObject = stream;
            camera.play();
        }
    })
        .catch((err) => {
        console.error(`An error occurred: ${err}`);
    });
}
// start entry point
window.addEventListener("load", main);
