### Fullscreen spinner

The 'fullscreen' means it blocks the page during the time the spinner runs: the user cannot access anything on the webpage. This example code is taken from [code-boxx.com](https://code-boxx.com/full-screen-css-loading-spinner/).

Website for [free spinners:](https://icons8.com/preloaders/).

**HTML** (this spinner is similar to the iPhone spinner)  
```html
<div id="spinner-back"></div>
  <div id="spinner-front">
    <img src="./images/spinner.gif" /><br>
  </div>
```

**CSS**  
```css
#spinner-back, #spinner-front {
  position: fixed;
  width: 100vw;
  transition: all 1s;
  visibility: hidden;
  opacity: 0;
}
#spinner-back {
  z-index: 998;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
}
#spinner-front {
  z-index: 999;
  color: #fff;
  text-align: center;
  margin-top: 50vh;
  transform: translateY(-50%);
}
#spinner-back.show, #spinner-front.show {
  visibility: visible;
  opacity: 1;
}
```

**JavaScript** show/hide spinner:  
```js
function show(){
  document.getElementById("spinner-back").classList.add("show");
  document.getElementById("spinner-front").classList.add("show");
}

function hide(){
  document.getElementById("spinner-back").classList.remove("show");
  document.getElementById("spinner-front").classList.remove("show");
}
```