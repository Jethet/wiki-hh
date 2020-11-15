/*
An HTML button is one of the few elements that has its own state
(along with almost all the form controls).
In specific situations, a button has to be disabled, for example
you want to only enable the button when a text input element is filled.
*/

// select the element:
document.getElementById("myButton").disabled = true;

// set its disabled property to true to disable it:
myButton.disabled = true

// to set it back again:
myButton.disabled = false

// If you have multiple buttons you might want to use
// document.querySelectorAll() and loop through the results.