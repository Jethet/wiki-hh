## Lazy loading or on-demand loading

Lazy loading in web development allows for optimisation of content delivery. When the page content is fetched and the DOM is built, some loading can be delayed. Instead of loading everything and rendering it to the user, elements are rendered when the user scrolls down, for example. The loading is limited to what is needed at the actual time.

The advantages are that loading time and use of memory are reduced. This gives better user experience. Lazy loading also avoids unnecessary code execution. It makes optimal use of time and resources.

Example: the user can fetch images by clicking a button. With lazy loading, you can limit the number of images that are rendered and show more when the user scrolls down.
```html
<img src={thumbnail} alt="" loading="lazy" />
```