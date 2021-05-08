### General CSS info
CSS defines the visual representation of the content of a website, such as colour, margins, borders, backgrounds and positions in the  
page. CSS is the presentation of the website, and HTML is the structure.

**Comments in CSS:** use `/* place your comments here */`.

#### Reset styles to avoid browser inconsistencies
``` css
html, body, div, h1, h2, h3, h4, h5, h6, p, a, img, small, b, i, ol, ul, li {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
```

#### Selector, property and value in CSS
The selector is the part of a CSS rule that determines which HTML elements the rule applies to:
``` css
body {
  color: xxxx;
}
```
=> `body` is the selector, `color` is the property and `#xAxBxC` is the value.

`*` selector: all elements are selected. `*` can also select all elements inside another element.  
`.` selector: class selector that selects all elements that use the specified class.  
`#` selector: id selector that selects the element with the exact id. There can be only one element with a particular id.  
`body` `h1` `a` `p` `img` etc. can be used as *element selectors*. The CSS style is ensured for all elements of that type.

**Pseudo class:**  
A pseudo class is a keyword added to selectors to specify a special state, for example `:hover` to turn a button blue when the  
cursor hovers over it. In this way, different styling can be specified for different states of a link `<a>`:  
* `a:link` is a normal, unvisited link  
* `a:visited` is a link the user has visited  
* `a:hover` is a link when the user mouses over it  
* `a:active` is a link the moment it is clicked  

The `text-decoration` property is mostly used to remove underlines from links:  
```
a:link {
  text-decoration: none;
}  
```
When setting the style for several link states, there are rules for the order: `a:hover` **must** come after `a:link` and `a:visited`;  
`a:active` **must** come after `a:hover`.

With `:hover` it is also possible to use time lapse for the effect to happen, e.g.:  
* `transition-duration: 0.5s` effect builds up during certain time  
* `transition-delay: 0.2s` effect does not start immediately  
* `transform: rotate(90deg)` rotating effect of buttons etc.  

### Display and positioning
#### Box model
All HTML elements can be considered as boxes. The CSS **box model** is essentially a box that wraps around every HTML  
element. The default size of a box is based on the content. This excludes the border and padding that is added to the  
content. It means the box will become bigger when padding and border are added. This can be controlled with **box-sizing**:  
`box-sizing: content-box` is the default and takes the width/height of the content  
`box-sizing: border-box` includes both content and border/padding  
`box-sizing: initial` sets the box-sizing to the default value  
`box-sizing: inherit` sets the box-sizing to the parent's value  

With `box-sizing: border-box` the padding and border no longer increase the width of a box. This is a very recent technique, and it  
should be used together with the `-webkit` and `-moz` prefix to be used in specific browsers, as follows:  
``` css
-webkit-box-sizing: border-box;
   -mox-box-sizing: border-box;
        box-sizing: border-box;
```

**Percent width**: percent is a measurement unit relative to the containing box. It can ensure that an image is always 50%  
the width of its container, for example. With 'min-width' and 'max-width' the size of the image can be limited.

* Default position HTML elements is `<div class="static">`. `static` means: not positioned in any specific way within the normal flow  
of the page. If not static, then an element is 'positioned'.  
* `<div class="relative">`: when an element has position **relative** it is no longer in the normal flow and can be moved to top, bottom,  
right or left.
* With a **fixed** position, an element is relative to the viewport of the browser window. As the viewport does not change when the window is scrolled, the element always appears to be at the same place. The top/right/bottom/left properties can be used. A fixed element does  
not leave a gap in the page where it would normally have been located.
* **absolute** positioning means the element behaves as if fixed, except relative to the nearest positional ancestor (or else the document  
body). An element of `<div class="relative">` can have an absolute-positioned 'child': `<div class="absolute">`.


**Inline and block elements are the most common ways to display elements:**  
* **block**: elements appear on a new line (also called block-level element). `<div>` is the standard block-level element: starts on a new  
line and stretches out to the left and right as far as it can. `<p> <form> <header> <footer> <section> <h1> <ul> <li>` etc. are all  
block-level elements.

* **inline**: elements appear on the same line. An inline element can wrap some text inside a paragraph: `<span>sometext</span>`  
without disrupting the flow of the paragraph. Examples of inline elements are `<img> <a> <em> <strong> <span>`.

* an **inline block**  is a display element that is used instead of inline when the `<div>` contains a class that is a block element (such  as `<h1>`) that takes over. Inline-blocks can have a width and height, for example to create a grid of boxes. An inline-block can be used   
for layouts: set `vertical-align: top`, set the width of each column that is defined in the html code. NB: whitespaces in the HTML will  show as gaps between the columns.


**Column**: It is possible to make a multi-column text, for example:  
``` css
.three-column {
  padding: 1em;
  -moz-column-count: 3;
  -moz-column-gap: 1em;
  -webkit-column-count: 3;
  -webkit-column-gap: 1em;
  column-count: 3;
  column-gap: 1em;
}
```

**none** is also a display value: use `display: none` to hide and show elements without really deleting and recreating them. The  
page is rendered as though the element does not exist, in contrast to `visibility: hidden` where the element is hidden but still  
takes up the space it would have if visible. Use `display: none` in responsive design to include elements that are available for  
one display size but not for others. 

**max-width**: using `max-width: xxxpx` instead of `width` when preventing a block-level element from stretching out to the edges  
of the container, the web page is usable on small screens: you can resize the page. The width of the block-level element is set,  
and with `margin: 0 auto` the element will centre horizontally in the container: the remaining space will be split evenly between  
the two margins.

**Floating elements**  
A floating element stands as far to the left or right of its container element as possible. Other elements, such as paragraphs text  
or Lists, wrap around the floating element. To ensure an element floats, its width must always be specified (otherwise it takes the  
width of the entire page).

*Floating properties:*  
* `float: right`    float to the right of the page  
* `float: left`     float to the left of the page  
* `float: inherit`  inherit the value of the parent element  
* `float: none`     do not float  

To **not wrap text** but have this appear after the floating element, use `clear`: `clear: left` will move the text, list, etc. down  
below the float instead of wrapping it around the floating element (same for `clear: right` and `clear: both`).

**Clearfix for floating elements**  
Elements after a floating element will flow around it. In case an image etc. is floated and is taller than the element containing  
it (the container), the image may overflow outside of its container. This can be fixed using:  
``` css
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
```

**Z-index:** the z-index controls how content overlaps. The element with the highest z-index appears on top.

### Media queries and responsive design
By using media queries it is possible to make a design that responds to the device and the browser used. There are various sizes  
of device viewports. Use `@media screen and (min-width: xxxpx)` and `@media screen and (max-width: xxxpx)` for this, for example  
to move a menu to the top if the browser is too small to have the menu as sidebar.

**Text shadow** adds a drop shadow and is formatted as follows: text-shadow: horizontal-shadow vertical-shadow blur color  
* `horizontal-shadow`: length of shadow along x-axis
* `vertical-shadow`: length of shadow along y-axis
* `blur`: controls how much (if any) blur radius is added to the shadow (optional)
* `color`: controls the colour of the shadow (optional)  

Same goes for **Box shadow**: this makes it possible to use multiple drop shadows on box elements using:  
`box-shadow: horizontal-shadow vertical-shadow blur size color inset`

**RGBA**: with `rgba` not only colour but also opacity can be assigned: `rgba(rgb code, opacity)`. For example `rgb(176, 175, 192)`  
 is the hex code #b0afc0. Opacity of 0.2 is very transparant; 1.0 is solid colour.

With **EM** (em = ephemeral unit) used for font-size, the font is kept relative to the default font size. This means 0.5 em is  
50% of the size that would apply as default.


**Replaced elements** are external objects such as`<img>` or `<video>`, whose representation is independent of the CSS formatting model.  
These elements have a content that is not affected by the current document's styles. The position of the replaced element can be  
affected using CSS, but not the contents of the replaced element itself. The only other impact CSS can have on a replaced  
element is that there are properties which support controlling the positioning of the element's content within its box.

#### Padding and margin

**Margin** is the whitespace *around* the element
**Padding** is the whitespace *inside* the element

Padding and margin can be set in a number of ways, following a specific order:
* padding/margin: top right bottom left `padding: 10px 20px 30px 5px`
* padding/margin: top right/left bottom `margin: 10px 20px 5px`
* padding/margin: top/bottom right/left `padding: 5px 15px`
* padding/margin: all `margin: 20px`
You can also set one specific padding or margin, for example `padding-right: 10px` or `margin-top: 30px`.

#### Images
* Always optimise images beforehand (scaling etc.) to have small filesize.  
* `vertical-align: top` will position all images in an image container at the top   
* `object-fit: cover` will size the image to the given width.  


**Background images**  
* Add to `body` or whatever element where the background should be: `background: url(path-to-image)`
* Use more background images by adding more urls after each other.  
* Set properties for background images: `background-size: first_image_size, second-image-size` etc.  
* `no repeat` must be added, otherwise the image repeats itself to fill the container.  
* `background-attachment: fixed, fixed` will keep the background from changing when scrolling: it remains in view.

#### Gradient
CSS gradients let you display smooth transitions between two or more specified colors. CSS defines two types of  
gradients:  

* **Linear Gradients** (goes down/up/left/right/diagonally)  
To create a linear gradient you must define at least two color stops. Color stops are the colors you want to render  
smooth transitions among. You can also set a starting point and a direction (or an angle) along with the gradient  
effect:`background-image: linear-gradient(direction, color-stop1, color-stop2, ...);`  
Examples:  
(default: top to bottom) `background-image: linear-gradient(red, yellow);`  
(from left to right) `background-image: linear-gradient(to right, red , yellow);`  
(diagonal) `background-image: linear-gradient(to bottom right, red, yellow);`  
(more colours) `background-image: linear-gradient(red, yellow, green);`  
(rainbow) `background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);`  

* **Transparency**: CSS gradients also support transparency, which can be used to create fading effects. To add   
transparency, we use the rgba() function to define the color stops. The last parameter in the rgba() function can  
be a value from 0 to 1, and it defines the transparency of the color: 0 indicates full transparency, 1 indicates full  
color (no transparency). Example: `background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));`

* **Radial Gradients** (defined by their center)  
A radial gradient is defined by its center. To create a radial gradient you must also define at least two color stops.  
Syntax: `background-image: radial-gradient(shape size at position, start-color, ..., last-color);` By default, shape is  
ellipse, size is farthest-corner, and position is center. The shape parameter defines the shape. It can take the value  
circle or ellipse.  
Examples:  
(evenly spaced colour stops) `background-image: radial-gradient(red, yellow, green);`  
(with differently spaced color stops) `background-image: radial-gradient(red 5%, yellow 15%, green 60%);`
(gradient with the shape of a circle) `background-image: radial-gradient(circle, red, yellow, green);`  

The **size** parameter defines the size of the gradient. It can take four values:  
* closest-side
* farthest-side
* closest-corner
* farthest-corner
Examples:  
`background-image: radial-gradient(closest-side at 60% 55%, red, yellow, black);` (result is more compact)  
`background-image: radial-gradient(farthest-side at 60% 55%, red, yellow, black);` (result has bigger hazy part)  


**Lists**  
* `list-style: none`: undo bullets  
* a list has **padding** and **margins** by default in all the browsers. Remove these with `margin: 0` and `padding: 0`.

**Common styles**  
It is possible to define common styles for different CSS classes by comma-separating them:  
``` css
.portrait, .title {
  display: inline-block;
}  
```

**Even and odd rules**  
It is possible to apply a different style to every second item on a list with the child element: `:nth-child(odd)` and `:nth-child(even)`.

**Not**  
The `not` selector finds all elements that do not match the specified description, for example, for a paragraph `p:not(....) {  }`.


