import Player from "@vimeo/player"; // module import
import throttle from "lodash.throttle";
import { resolve } from "path";

const iframe = document.querySelector("iframe"); // find video player in DOM
const player = new Player(iframe); //create vimeo player object

let secondsPlayed = Number(localStorage.getItem("videoplayer-current-time")); // convert localStorage player progress to number

// Things done while video is playing
const onPlay = (data) => {
  // show curent time in seconds
  player.getCurrentTime().then((seconds) => {
    // do it if time is less than duration
    // there is problem that 'ended' event runs just before last second
    // that's why I limited progress backup
    if (seconds <= 571) {
      console.log(seconds); //print actual time

      // save current progress of video to local storage
      localStorage.setItem("videoplayer-current-time", seconds);
    }
  });
};
const onEnd = (duration) => {
  localStorage.setItem("videoplayer-current-time", 0);
  console.log("video has ended");
};
// print last session video progress (in seconds) and set player progress to it
window.addEventListener("load", (data) => {
  // if last session video progress exists
  if (localStorage.getItem("videoplayer-current-time")) {
    // print last session seconds
    console.log(`Video progress from last session: ${secondsPlayed} seconds`);

    // load last player progress
    player.setCurrentTime(secondsPlayed);

    // when video is ended, remove local storage
  }
});

// get and print title of the currently played video
player.getVideoTitle().then((title) => {
  console.log(`Video title: ${title}`);
});

// when video is playing, update time and save it to local storage as "videoplayer-current-time" using throttle to delay updates by 1 second
player.on("timeupdate", throttle(onPlay, 1000));

// detect when video is finished
player.on("ended", onEnd);
