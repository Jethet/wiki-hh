## Async-await and promises

Promises were new in ES6 as a method to write asynchronous code. With promises you can avoid many callbacks messing up the code.

A promise object has three states:
1. *pending*: initial state, before success or failure
1. *resolved*: the promise completed
1. *rejected*: the promise failed

A promise can be created with a constructor, and takes two parameters: one for success and one for failure. Inside is a **condition** and when the condition is met, the promise is resolved. Otherwise, the promise is rejected:
```js
const myPromise = newPromise((resolve, reject) => {
  let myCondition = "condition"

  if (myCondition === "condition is met") {
    resolved("Promise is resolved successfully")
  } else {
    reject("Promise is rejected")
  }
})
```

After a promise is resolved, you use two methods:  
* .then() is used after a successful promise, when you decide what you will do with the resolved promise
* .catch() is used for rejected promises
These methods can be chained:  
```js
myPromise
  .then((message) => {
    console.log(message)
  .catch((message) => {
    console.log(message)
  })
})
```

**With async-await promises get easier**  
The `async` function using the `await` keyword make asynchronous code easier to write and read.

`async` is put in front of a function declaration: this turns the function into an asynchronous function that can be used with the `await` keyword to invoke asynchronous code. Example:
```js
async function myFunction() {
  try {
    const fulfulledValue = await promise
  }
  catch (rejectedValue) {
    // do something
  }
}
```
In the example, you await the promise to be settled. If the promise fulfills, you get the value back from the function. If the promise rejects, the rejected value is thrown.

Example: **Logging a fetch**  
This function is fetching a URL and logging the response as text.
* using promises:
  ```js
  function logFetch(url) {
    return fetch(url)
    .then(response => response.text())
    .then(text => {
      console.log(text)
    })
    .catch(error => {
      console.log("Fetch failed", error)
    })
  }
  ```  

* using an async function:
  ```js
  async function logFetch(url) {
    try {
      const response = await fetch(url)
      console.log(await response.text())
    }
    catch (error) {
       console.log("Fetch failed", error)
    }
  }
  ```

