/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./dist/index.js ***!
  \***********************/

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsMkJBQTJCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSxtREFBbUQsSUFBSTtBQUN2RCxZQUFZO0FBQ1o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmlkZW9zdHJlYW1pbmcvLi9kaXN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5jb25zb2xlLmxvZyhcInN0YXJ0IHZpZGVvIHN0cmVhbWluZ1wiKTtcclxuLy8gZW50cnkgcG9pbnRcclxuZnVuY3Rpb24gbWFpbigpIHtcclxuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgaWYgKCFib2R5KVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIHZhciB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FtZXJhXCIpO1xyXG4gICAgLy8gaWYgKHZpZGVvIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xyXG4gICAgLy8gICAgIC8vIGNhbWVyYS5zcmNPYmplY3QgPSBzdHJlYW1cclxuICAgIC8vICAgICAvLyBjYW1lcmEucGxheSgpXHJcbiAgICAvLyAgICAgdmlkZW8uc3JjID0gJ2h0dHBzOi8vbW9jdG9icGx0Yy1pLmFrYW1haWhkLm5ldC9obHMvbGl2ZS81NzEzMjkvZWlnaHQvcGxheWxpc3QubTN1OCdcclxuICAgIC8vICAgICB2aWRlby5tdXRlZCA9IHRydWVcclxuICAgIC8vICAgICB2aWRlby5wbGF5KClcclxuICAgIC8vICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXknKVxyXG4gICAgLy8gICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAuY2F0Y2goKHJlYXNvbjphbnkpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5IGVycm9yJylcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlYXNvbilcclxuICAgIC8vICAgICAgICAgfSlcclxuICAgIC8vIH1cclxuICAgIHZhciBwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwbGF5XCIpO1xyXG4gICAgaWYgKHBsYXkgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCkge1xyXG4gICAgICAgIHBsYXkub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHZpZGVvIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdmlkZW8ucGxheSgpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdwbGF5Jyk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5jYXRjaCgocmVhc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3BsYXkgZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZWFzb24pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoeyB2aWRlbzogdHJ1ZSwgYXVkaW86IGZhbHNlIH0pXHJcbiAgICAvLyAgICAgLnRoZW4oKHN0cmVhbSkgPT4ge1xyXG4gICAgLy8gICAgICAgICBpZiAoY2FtZXJhIGluc3RhbmNlb2YgSFRNTFZpZGVvRWxlbWVudCkge1xyXG4gICAgLy8gICAgICAgICAgICAgY2FtZXJhLnNyY09iamVjdCA9IHN0cmVhbVxyXG4gICAgLy8gICAgICAgICAgICAgY2FtZXJhLnBsYXkoKVxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKGBBbiBlcnJvciBvY2N1cnJlZDogJHtlcnJ9YCk7XHJcbiAgICAvLyAgICAgfSk7XHJcbn1cclxuLy8gc3RhcnQgZW50cnkgcG9pbnRcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIG1haW4pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=