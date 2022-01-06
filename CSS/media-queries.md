### Media queries and responsive design
By using media queries it is possible to make a design that responds to the device and the browser used. There are various sizes of device viewports. Use `@media screen and (min-width: xxxpx)` and `@media screen and (max-width: xxxpx)` for this, for example to move a menu to the top if the browser is too small to have the menu as sidebar.

Media queries can be used to check many things, such as:  
* width and height of the viewport
* width and height of the device
* orientation (is the tablet/phone in landscape or portrait mode?)
* resolution

A media query consists of a media type and can contain one or more expressions, which resolve to either true or false.
```css
@media not|only mediatype and (expressions) {
  /* CSS-Code; */
}
```

The result of the query is true if the specified media type matches the type of device and all expressions in the media query are true. When a media query is true, the corresponding style sheet or style rules are applied, following the normal cascading rules. Unless you use the not or only operators, the media type is optional and the **all** type will be implied.