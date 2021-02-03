### Responsive Web Layout

**em and rem**  
`em` stands for ephemeral units  
An em will take the defined font size of your page and then increase or decrease from there. For example if you have your `<body>` elements set at 16px, then 1em will be 16px, 1.5em will be 24px, 2em will be 32px.

Why this is a good choice is that different operating systems? Both desktop and mobile may have a different opinion on what is 16px. By using an em to increase or decrease elements, this will adjust from you a threshold (1em) and move from there.
`rem` (=root em) units for the font-size property will be **relative to the font-size of the parent element**. em units on other properties than font-size will be relative to the font-size of the current element. rem units sizes will always be relative to the font-size of the root html element. 