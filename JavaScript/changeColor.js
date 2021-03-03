// Simple code to change color of a container

// add button with event listener
let body = document.querySelector('.container')
let toggleButton = false
let colorButton = document.querySelector(".color-button")
colorButton.addEventListener("click", function (e) {
  changeBackground()
  e.preventDefault()
})

// function to change background color
function changeBackground() {
  toggleButton = !toggleButton
  if(toggleButton) {
    body.style.background = '#05E3EE'
  } else {
    body.style.background = '#AFDCFB'
  }
}
