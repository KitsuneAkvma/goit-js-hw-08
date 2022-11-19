
import Player from "@vimeo/player";

const iframe = document.querySelector("#vimeo-player");
const player = new Vimeo.Player(iframe);

player.on("play", () => {
  console.log("played the video!");
});

player.getVideoTitle().then(function (title) {
  console.log("title:", title);
});

