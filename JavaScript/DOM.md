## Working with the DOM in JavaScript

**Adding new elements:**  
`document.createElement()` is used to create new DOM elements.

Example: create a new list on an HTML page
* create a `ul` element: `let unorderedList = document.createElement("ul")`
* add the `<ul>` to the DOM: `document.body.appendChild(unorderedList)`
* add some `<li>` elements inside the `ul`:  
    * `let listItemA = document.createElement("li")`
    * `let listItemB = document.createElement("li")`
    * `let listItemC = document.createElement("li")`
* add some text in the listItems with the `textContent` property:
    * `listItemA.textContent = "This is the first item"`
    * `listItemB.textContent = "This is item number two"`
    * `listItemC.textContent = "And this is the third item"`
* with the `appendChild()` method you can add the items to the unordered list:
    * `unorderedList.appendChild(listItemA)`
    * `unorderedList.appendChild(listItemB)`
    * `unorderedList.appendChild(listItemC)`

The total code per item consists of these three steps:
```js
let listItemA = document.createElement("li")
listItemA.textContent = "This is the first item"
unorderedList.appendChild(listItemA)
```

**Style property to change inline CSS styles:**  
Using the `style` property you can change the CSS of elements.

First grab the element using the `document.getElementById()` or `document.querySelector()` methods. For example:  
`const headerA = document.querySelector("h1")`  
With `headerA.style.color = "blue"` you can directly access the color of the element.