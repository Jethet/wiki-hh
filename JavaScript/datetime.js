let now = new Date();
console.log(new Date());

let toDay = new Date(2020, 01, 28, 21, 21);
console.log(toDay);

let myTime = new Date().getTimezoneOffset();
console.log(myTime);

let today = new Date()
today.setHours(0)
console.log(today);


// reproduce time in 00.00 format
function formatTime(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}
/*
<body>
  <div>
    <h3 class="timer-current">Current time: <span id="current-time"></span></h3>
  </div>
  <script src="currentTime.js"></script>
</body>
*/
// get current time and show it in (needs HTML code for DOM element !!!)
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