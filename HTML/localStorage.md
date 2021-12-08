## Local storage
You can **store string data** in a way that survives page reloads by putting it in the localStorage object. This object allows you to file string values under names (also strings), as in this example:  
```js
localStorage.setItem("username", "Hanna");
console.log(localStorage.getItem("username"));
// returns: Hanna
localStorage.removeItem("username");
```
* A value in localStorage sticks around until it is overwritten, it is removed with `removeItem`, or the user **clears their local data**.

* Sites from different domains get different storage compartments. That means data stored in localStorage by a given website can, in principle, only be read (and overwritten) by scripts on that same site.

* Browsers also enforce a limit on the size of the data a site can store in localStorage, typically on the order of a few megabytes.

---

### Working with JSON in local storage

**JSON.Stringify**  
* `JSON.Stringify() `is a function that is built into JSON, to create a JSON string from a JavaScript Array or Object.

* The syntax is: `JSON.stringify(value, replacer, space)`:
    * **value:** the value which is going to be converted into a JSON string
    * **replacer:** optional parameter, can be an array, or an altering function (used as a selected filter for the JSON.stringify). If the value is null or empty, all properties of an object will be appended to the string.
    * **space:** optional parameter to control the spacing in the string that is generated. For the value, you can either pass a string (string will be used for indentation) or number (number of spaces will be indented).
* The return value of `JSON.stringify()` is a string

    Example:  
    ```js
    var myObject = { 
      name: "James", 
      age: 25, 
      location: "California"
    };

    var result = JSON.stringify(myObject);
    // returns: {"name":"James","age":25,"location":"California"}
    ```
**JSON.parse**  
* JSON is used to exchange data from a web server. Data is always received in a string form from a web server.
* `JSON.parse()` is a JavaScript method to convert string data form into a JavaScript object.
* JSON does NOT support trailing commas: do not use JSON.parse on strings with a trailing comma because this will throw a syntax error.

  Example:
  ```js
  var myObj = '{ "name": "Black Widow", "age": 32, "city": "New York" }';

  var result = JSON.parse(myObj);
  // returns: { name: "Black Widow", age: 32, city: "New York"}
  ```