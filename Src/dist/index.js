"use strict";
console.log("start video streaming");
// entry point
function main() {
    let body = document.querySelector('body');
    if (!body)
        return;
    var video = document.getElementById("camera");
    // if (video instanceof HTMLVideoElement) {
    //     // camera.srcObject = stream
    //     // camera.play()
    //     video.src = 'https://moctobpltc-i.akamaihd.net/hls/live/571329/eight/playlist.m3u8'
    //     video.muted = true
    //     video.play()
    //         .then(() => {
    //             console.log('play')
    //         })
    //         .catch((reason:any) => {
    //             console.log('play error')
    //             console.log(reason)
    //         })
    // }
    var play = document.getElementById("play");
    if (play instanceof HTMLButtonElement) {
        play.onclick = () => {
            if (video instanceof HTMLVideoElement) {
                video.play()
                    .then(() => {
                    console.log('play');
                })
                    .catch((reason) => {
                    console.log('play error');
                    console.log(reason);
                });
            }
        };
    }
    // navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    //     .then((stream) => {
    //         if (camera instanceof HTMLVideoElement) {
    //             camera.srcObject = stream
    //             camera.play()
    //         }
    //     })
    //     .catch((err) => {
    //         console.error(`An error occurred: ${err}`);
    //     });
}
// start entry point
window.addEventListener("load", main);
