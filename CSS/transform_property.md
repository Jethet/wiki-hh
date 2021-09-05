## CSS transform: the 2D transformation property

With the **CSS transform property** you can use the following transformation methods:  
* **translate()**: CSS translate moves an element from its current position **up and down or side-to-side**:  
  * By indicating one value, you move the element to the right side. Negative values move elements to the left.
  * The second value moves the element down. Negative values move elements up.
  * The CSS `translateY` and `translateX` properties are a bit more specific. The elements move along either the horizontal or vertical axis.  
  The following example moves the element 50 pixels to the right, and 100 pixels down from its current position:
    ```css
      div {
        transform: translate(50px, 100px);
      }
    ```  

* **rotate()**: The rotate() method rotates an element clockwise or counter-clockwise according to a given degree. Using negative values will rotate the element counter-clockwise. The following example rotates the <div> element clockwise with 20 degrees:
    ```css
    div {
      transform: rotate(20deg);
    }
    ```

* **scaleX()**

* **scaleY()**

* **scale()**

* **skewX()**

* **skewY()**

* **skew()**

* **matrix()**