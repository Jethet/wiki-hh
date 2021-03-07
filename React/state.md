### useState hook

* State is an object that represents a **part of an app that can change**, which the UI “reacts” to.  
* State can be anything; objects, booleans, arrays, strings or integers.  
* The useState object gives us a variable with the current value, and a function that lets us change that value.
* When we call useState we can define an initial value (for example, `false` or `0`).
* We use destructuring assignment on the useState hook to get these.
* A **destructuring assignment** is a special syntax that allows us to “unpack” arrays or objects into separate variables. Simple example: `let [a, b, c] = "abc";` will give ["a", "b", "c"]
* **Map()** iterates as [key, value] pairs, very convenient for destructuring:  
```
let user = new Map();
user.set("name", "John");
user.set("age", "30");

for (let [key, value] of user) {
  alert(`${key}:${value}`); // name:John, then age:30
}
```  
