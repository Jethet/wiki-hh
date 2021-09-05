### Animation

Package used: [react-animated-css](https://github.com/digital-flowers/react-animated-css)

Install: `npm i react-animated-css --save`

Add this to `<head>`:
```html
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
```

**How to use:** this is a wrapper around the element you want to animate:  
```js
import {Animated} from "react-animated-css";

<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
    <div>
        hello world ;)
    </div>
</Animated>
```

**Available properties:**  
  *  animationIn animation in name, default "fadeIn"
  *  animationOut animation out name, default "fadeOut"
  *  animationInDelay animation in delay (milliseconds), default 0
  *  animationOutDelay animation out delay (milliseconds), default 0
  *  animationInDuration animation in duration (milliseconds), default 1000
  *  animationOutDuration animation out duration (milliseconds), default 1000
  *  style react style property for the inner component
  *  isVisible if the component is visible or not, default true
  *  innerRef react ref property for the inner component
  *  className react className property for the inner component
  *  animateOnMount apply animationIn on mount or not, default true

**ERROR message re. Animated:**  
If you get this error message:  

*To rename all deprecated lifecycles to their new names, you can run `npx react-codemod rename-unsafe-lifecycles` in your project source folder.*
*Please update the following components: Animated*

then run the command that is mentioned.

**Example in React:**
```js
import React, { useState } from "react";
import { Animated } from "react-animated-css";

const Box = ({ word }) => {
  const colors = [
    "#6690FF",
    "#6CD566",
    "#50E5FF",
    "#FFDC75",
    "#FF7C83",
    "#FF702D",
    "#FFAA42",
    "#7F7B82",
    "#4D7EA8",
  ];

  const color = colors[Math.floor(Math.random() * 9)];
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  const hideMe = () => {
    setFading(true);
    setTimeout(() => setVisible(false), 650);
  };

  let style = { borderColor: color, backgroundColor: color };
  if (!visible) style.display = "none";

  return (
      <Animated
        animationIn="zoomIn"
        animationOut="zoomOut"
        isVisible={!fading}
        style={visible ? null : { display: "none" }}
      >
        <div className="box" style={style}>
          <div className="center">{word}</div>
          <button className="button bottom-corner" onClick={hideMe}>
            <i className="center far fa-eye fa-lg"></i>
          </button>
        </div>
      </Animated>
  );
};

export default Box;

```