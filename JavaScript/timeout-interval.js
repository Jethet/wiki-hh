// setTimeout takes a function as first argument, and the time in milliseconds as second argument:

setTimeout((myFunc) => {
  console.log("The three seconds have passed");
}, 3000)


myVar = setInterval(() => {
  console.log("The interval of 5 seconds has expired");
}, 5000)

function myStopFunction() {
  clearInterval(myVar);
  console.log("The interval is cleared");
}
