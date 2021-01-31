### General CSS info
CSS defines the visual representation of the content of a website, such as colour, margins, borders, backgrounds and positions in the  
page. CSS is the presentation of the website, and HTML is the structure.

**Comments in CSS:** use `/* place your comments here */`.

#### Reset styles to avoid browser inconsistencies
```
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
```
body {
  color: xxxx;
}
```
=> `body` is the selector, `color` is the property and `#xAxBxC` is the value.

`*` selector: all elements are selected. `*` can also select all elements inside another element.  
`.` selector: class selector that selects all elements that use the specified class.  
`#` selector: id selector that selects the element with the exact id. There can be only one element with a particular id.  
`body` `h1` `a` `p` `img` etc. can be used as *element selectors*. The CSS style is ensured for all elements of that type.

**Pseudo class** a keyword added to a selector. A pseudo class specifies a special state of the element to be selected,  


A pseudo class is a keyword added to selectors to specify a special state, for example `:hover` to turn a button blue when the  
cursor hovers over it. In this way, different styling can be specified for different states of a link `<a>`:
`a:link` is a normal, unvisited link  
`a:visited` is a link the user has visited  
`a:hover` is a link when the user mouses over it  
`a:active` is a link the moment it is clicked  

When setting the style for several link states, there are some order rules: `a:hover` MUST come after `a:link` and `a:visited`;  
`a:active` MUST come after `a:hover`.

With `:hover` it is also possible to use time lapse for the effect to happen, e.g.:
`transition-duration: 0.5s` effect builds up during certain time  
`transition-delay: 0.2s` effect does not start immediately  
`transform: rotate(90deg)` rotating effect of buttons etc.  

### Display and positioning
#### Box model
All HTML elements can be considered as boxes. In CSS, the term **box model** is used when talking about design and layout. The CSS  
box model is essentially a box that wraps around every HTML element. It consists of margins, borders, padding and the actual content.  
Inline boxes flow from left to right and block boxes from top to bottom. 

* Default position HTML elements is `<div class="static">`. `static` means: not positioned in any specific way within the normal flow  
of the page. If not static, then an element is 'positioned'.  
* `<div class="relative">`: when an element has position **relative** it is no longer in the normal flow and can be moved to top, bottom,  
right or left.
* With a **fixed** position, an element is relative to the viewport of the browser window. As the viewport does not change when the window is scrolled, the element always appears to be at the same place. Top/right/bottom/left properties can be used. A fixed element does not  
leave a gap in the page where it would normally have been located.
* **absolute** positioning means the element behaves as if fixed, except relative to the nearest positional ancestor (or else the document  
body). An element of `<div class="relative">` can have an absolute-positioned 'child': `<div class="absolute">`.

**Inline and block elements are the most common ways to display elements.**  
* **block**: elements appear on a new line (also called block-level element). `<div>` is the standard block-level element: starts on a new  
line and stretches out to the left and right as far as it can. `<p> <form> <header> <footer> <section> <h1> <ul> <li>` etc. are block-level  
elements.

* **inline**: elements appear on the same line. An inline element can wrap some text inside a paragraph: `<span>sometext</span>`  
without disrupting the flow of the paragraph. Examples of inline elements are `<img> <a> <em> <strong> <span>`.

* an **inline block**  is a display element that is used instead of inline when the `<div>` contains a class that is a block element  
(such as `<h1>`) that takes over. Inline-blocks can have a width and height, for example to create a grid of boxes. An inline-block can  
be used for layouts: set `vertical-align: top`, set the width of each column that is defined in the html code. NB: whitespaces in the HTML  
will show as gaps between the columns.

**Column**: It is possible to make a multi-column text, for example:  
```
.three-column {
  padding: 1em;
  -moz-column-count: 3;
  -mox-column-gap: 1em;
  -webkit-column-count: 3;
  -webkit-column-gap: 1em;
  column-count: 3;
  column-gap: 1em;
}
```

**none** is also a display value: use `display: none` to hide and show elements without really deleting and recreating them.  
The page is rendered as though the element does not exist, in contrast to `visibility: hidden` where the element is hidden but  
still takes up the space it would have if visible. Use `display: none` in responsive design to include elements that are available  
for one display size but not for others. 

**max-width**: using `max-width: xxxpx` instead of `width` when preventing a block-level element from stretching out to the edges  
of the container, the web page is usable on small screens: you can resize the page. The width of the block-level element is set,  
and with `margin: 0 auto` the element will centre horizontally in the container: the remaining space will be split evenly between  
the two margins.

**Floating elements**  
A floating element stands as far to the left or right of its container element as possible. Other elements, such as paragraphs  
text or Lists, wrap around the floating element. To ensure an element floats, its width must always be specified (otherwise it  
takes the width of the entire page).

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
```
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
```



#### Padding and margins

Margin: whitespace AROUND the element
Padding: whitespace INSIDE the element

Padding and margin can be set in a number of ways:
padding: top right bottom left  --> padding: 10px 20px 30px 5px
padding: top right/left bottom  --> padding: 10px 20px 5px
padding: top/bottom right/left  --> padding: 5px 15px
padding: all  --> padding: 20px
You can also set one specific padding: padding-right
All of this also applies to MARGIN.

To keep the box from becoming bigger with padding and borders, use BOX-SIZING.
With 'box-sizing: border-box;' the padding and border no longer increase the
width of a box. This is a very recent technique and should be used together
with '-webkit' and '-moz' prefix to be used in specific browsers. Use as follows:
-webkit-box-sizing: border-box;
   -mox-box-sizing: border-box;
        box-sizing: border-box;

PERCENT WIDTH: percent is a measurement unit relative to the containing box.
It can ensure that an image is always 50% the width of its container, for example.
With 'min-width' and 'max-width' the size of the image can be limited.




Z-INDEX: the z-index controls how content overlaps. The element with the highest
z-index appears on top.

MEDIA QUERIES AND RESPONSIVE DESIGN: making a design that responds to the browser
and the device that is used, can be done by using media queries.
Use '@media screen and (min-width: xxxpx)' and '@media screen and (max-width: xxxpx)'
for this, for example to move a menu to the top if the browser is too small to
have the menu as sidebar.

TEXT SHADOW: adds a drop shadow and is formatted as follows:
text-shadow: horizontal-shadow vertical-shadow blur color
* horizontal-shadow: length of shadow along x-axis
* vertical-shadow: length of shadow along y-axis
* blur: controls how much (if any) blur radius is added to the shadow (optional)
* color: controls the colour of the shadow (optional)
Same goes for BOX SHADOW: this makes it possible to use multiple drop shadows on
box elements using: 'box-shadow: horizontal-shadow vertical-shadow blur size
 color inset'

RGBA: with rgba not only colour but also opacity can be assigned:
rgba(rgb code, opacity). For example, rgb(176, 175, 192) is the hex code #b0afc0.
Opacity of 0.2 is very transparant; 1.0 is solid colour.

BORDER RADIUS: creates rounded corners to elements; the higher the number, the
bigger the curve.



With EM (em = ephemeral unit) used for font-size, the font is kept relative to
the default font size. This means 0.5 em is 50% of the size that would apply as
default.



To use grid layout, always start with: display: grid;


**Replaced elements** are external objects such as`<img>` or `<video>`, whose representation is independent of the CSS formatting model.  
These elements have a content that is not affected by the current document's styles. The position of the replaced element can be  
affected using CSS, but not the contents of the replaced element itself. The only other impact CSS can have on a replaced  
element is that there are properties which support controlling the positioning of the element's content within its box.

#### Images
Always optimise images beforehand (scaling etc.) to have small filesize.  
`vertical-align: top` will position all images in an image container at the top   
`object-fit: cover` will size the image to the given width.  

**Background images**  
Add to `body` or whatever element where the background should be: `background: url(path-to-image)`
Use more background images by adding more urls after each other.  
Set properties for background images: `background-size: first_image_size, second-image-size` etc.  
`no repeat` must be added, otherwise the image repeats itself to fill the container.  
`background-attachment: fixed, fixed` will keep the background from changing when scrolling: it remains in view.

**Lists**  
* `list-style: none`: undo bullets  
* a list has **padding** and **margins** by default in all the browsers. Remove these with `margin: 0` and `padding: 0`.

**Common styles**  
It is possible to define common styles for different CSS classes by comma-separating them:  
.portrait, .title {
  display: inline-block;
}

**Even and odd rules**  
It is possible to apply a different style to every second item on a list with the child element: `:nth-child(odd)` and `:nth-child(even)`.

**Not**  
The `not` selector finds all elements that do not match the specified description, for example, for a paragraph `p:not(....) {  }`.


### Flexbox

When **changing a row to a column**, you also need to change the direction of `justify-content` because this now refers to vertical  
alignment. Use `align-items:` for this.

**Order**: adding an order property to a flex item defines its order in the container without affecting surrounding items. Its default  
value is 0, and increasing or decreasing it from there moves the item to the right or left, respectively. This can be used, for example,  
to swap order of the .first-item and .last-item elements in a grid. 
