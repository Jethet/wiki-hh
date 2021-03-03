// Play sound and show alert message
function play() {
  let alertSound;
  alertSound = new Audio("./windchimes.wav");
  alertSound.play();
  setTimeout(function () {
    alert("The set time has elapsed");
  }, 1000);
}

let playButton = document.querySelector("#play-sound-button")
playButton.addEventListener("click", function (e) {
  play()
  e.preventDefault();
});

