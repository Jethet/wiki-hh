/* This code snippet can be used to show the current time on your screen. The time format is 00:00:00.
The time lapse is one second, i.e. the time that is shown counts the seconds.
 The code contains no styling. The technology used is HTML and JavaScript.*/

 // Format the hours, minutes and seconds as 00:00:00
function formatTime(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

// get current time
function currentTime() {
  const today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  hour = formatTime(hour);
  minute = formatTime(minute);
  second = formatTime(second);

  document.querySelector("#current-time").innerHTML = hour + ":" + minute + ":" + second;
  setTimeout(function () {
    currentTime();
  }, 1000);  
}

currentTime()