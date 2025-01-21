## Height and width need to be set, always

For example:

```css
html {
  height: 100vh;
  width: 100vw;
}

.container {
  height: 90vh;
  width: 90vw;
}

.my-image {
  
}
```
**round images** are created by setting `border-radius` to **half** of `width`.

**position: absolute** is always used in relation to the (entire) window, not to any container that wraps the image. With `position: absolute` the item is no longer part of the flex layout either.