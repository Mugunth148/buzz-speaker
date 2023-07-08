var button = document.getElementById("button");
var audio = document.getElementById("audio");

button.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    button.innerHTML = "Pause";
  } else {
    audio.pause();
    button.innerHTML = "Play";
  }
});
