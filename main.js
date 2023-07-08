// getting the button and audio element

var button = document.getElementById("button");
var audio = document.getElementById("audio");

// play/pause function using the audio element

button.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    button.innerHTML = "Stop";
  } else {
    audio.pause();
    button.innerHTML = "Buzz";
  }
});
