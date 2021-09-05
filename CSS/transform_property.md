## CSS transform: the 2D transformation property

With the **CSS transform property** you can use the following transformation methods:  

* **translate()**: This method **moves** an element from its current position **up and down or side-to-side**:  
  * By indicating one value, you move the element to the right side. Negative values move elements to the left.
  * The second value moves the element down. Negative values move elements up.
  * The CSS `translateY` and `translateX` properties are a bit more specific. The elements move along either the horizontal or vertical axis.  
This example moves the element 50 pixels to the right, and 100 pixels down from its current position:
  ```css
    div {
      transform: translate(50px, 100px);
    }
  ```  

* **rotate()**: This method **rotates** an element clockwise or counter-clockwise according to a given degree. Using negative values will rotate the element counter-clockwise. This example rotates the element clockwise with 20 degrees:
    ```css
    div {
      transform: rotate(20deg);
    }
    ```

* **scale()**: This method increases or decreases **the size of an element** according to the parameters given for the width and height. This example increases the element to be two times of its original width, and three times of its original height: 

  ```css
    div {
    transform: scale(2, 3);
    }
  ```

* **scaleX()**: This method increases or decreases the **width** of an element. This example increases the element to be two times of its original width:  
  ```css
    div {
      transform: scaleX(2);
    }
  ```

* **scaleY()**: This method increases or decreases the **height** of an element. This example increases the element to be two times of its original width:  
  ```css
    div {
      transform: scaleY(3);
    }
  ```

* **skew()**: This method **skews an element along the X and Y-axis** by the given angles. This example skews the element 20 degrees along the X-axis, and 10 degrees along the Y-axis:  
  ```css
    div {
      transform: skew(20deg, 10deg);
    }
  ```
  
* **skewX()**: This method **skews an element along the X-axis** by the given angle. This example skews the element 20 degrees along the X-axis:  
```css
  div {
    transform: skewX(20deg);
  }
```

* **skewY()**: This method **skews an element along the Y-axis** by the given angle. This example skews the element 20 degrees along the Y-axis:  
  ```css
    div {
      transform: skewY(20deg);
    }
  ```

* **matrix()**: This method **combines all the 2D transform methods** into one. The matrix() method take six parameters, containing mathematic functions, which allows you to rotate, scale, move (translate), and skew elements. The parameters are as follow: matrix(scaleX(),skewY(),skewX(),scaleY(),translateX(),translateY()). Example:
  ```css
    div {
      transform: matrix(1, -0.3, 0, 1, 0, 0);
    }
  ```
