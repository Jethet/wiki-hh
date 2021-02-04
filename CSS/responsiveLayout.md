### Responsive Web Layout

**Using pixels**  
With px, an element is locked in place to an exact location on the page, or an element stays exactly a certain size.  
This could be useful to keep a design pixel perfect with a web design.

**Using em and rem**  
`em` stands for ephemeral units. An em will take the defined font size of your page and then increase or decrease  
from there. For example if `<body>` elements is set at 16px, then 1em will be 16px, 1.5em will be 24px, and 2em will  
be 32px.

Using `em` or `rem` can be a good choice because both desktop and mobile may have a different opinion on what is 16px.  
By using an em to increase or decrease elements, this will adjust from the threshold (being `1em`) and move from there.  
`rem` (=root em) units for the font-size property will be **relative to the font-size of the parent element**. The difference  
is that em units on other properties than font-size will be relative to the font-size of the current element. The size  
of rem units will always be relative to the font-size of the root html element. 