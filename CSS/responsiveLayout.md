### Responsive Web Layout

**Using pixels**  
With px, an element is locked in place to an exact location on the page, or an element stays exactly a certain size.  
This could be useful to keep a design pixel perfect with a web design.  
For responsive design, use flexible settings such as percentages or em.  

**Using em and rem**  
`em` stands for ephemeral units. An em will take the defined font size of your page and then increase or decrease  
from there. For example if `<body>` elements is set at 16px, then 1em will be 16px, 1.5em will be 24px, and 2em will  
be 32px.

Using `em` or `rem` can be a good choice because both desktop and mobile may have a different opinion on what is 16px.  
By using an em to increase or decrease elements, this will adjust from the threshold (being `1em`) and move from there.  
`rem` (=root em) units for the font-size property will be **relative to the font-size of the parent element**. The difference  
is that em units on other properties than font-size will be relative to the font-size of the current element. The size  
of rem units will always be relative to the font-size of the root html element.   


#### Images
* Always optimise images beforehand (scaling etc.) to have small filesize.  
* `vertical-align: top` will position all images in an image container at the top   
* `object-fit: cover` will size the image to the given width.  

**Scaling images** can be done within the image container:  
```
.container {
  width: 50%;
  height: 200px;
  overflow: hidden;
}
.container img {
  max-width: 100%;
  height: auto;
  display: block
}
```

**Background images**  
* Add to `body` or whatever element where the background should be: `background: url(path-to-image)`
* Use more background images by adding more urls after each other.  
* Set properties for background images: `background-size: first_image_size, second-image-size` etc.  
* `no repeat` must be added, otherwise the image repeats itself to fill the container.  
* `background-attachment: fixed, fixed` will keep the background from changing when scrolling: it remains in view.

Example:  
```
.bookpage {
  margin: 0 auto;
  background: url("./library.jpg");
  height: 100vh;
  width: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: auto;
  background-attachment: fixed;
}
```