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

---

**Response methods**  
The most used ones:
* `response.json()` returns a promise that resolves with the result of parsing the response body text as JSON
* `response.text()` returns a promise that resolves with a text representation of the response body
* `response.redirect()` creates a new response with a different URL
* `response.error()` returns a new Response object associated with a network error
* `response.blob()` Returns a promise that resolves with a Blob (a file-like object of immutable, raw data, not necessarily in a JavaScript-native format) representation of the response body

**Response properties (read only)**  
* `response.body` a ReadableStream (byte data) of the body contents
* `response.bodyUsed` boolean value that declares if the body has been used in a response yet
* `response.headers` the Headers object associated with the response
* `response.ok` boolean indicating if the response was successful (range 200–299) or not
* `response.redirected` indicates if the response is the result of a redirect (i.e. the URL list has more than one entry).
* `response.status` status code of the response (200 for a success)
* `response.statusText` status message corresponding to the status code (e.g. OK for 200)
* `response.typ` type of the response (e.g., basic, cors)
* `response.url` the URL of the response.


---

**Error handling**  
* Option 1: use synchronous structure with `try ... catch`  
  ```js
    async function myFetchRequest(url) {
      try {
        let myResponse = await fetch("holiday.jpg")

        if (!response.ok) {
          throw new Error(`HTTP error, status: ${response.status}`)
        }
      
        let myBlob = await response.blob()
        let objectURL = URL.createObjectURL(myBlob)
        let image = document.createElement("img")
        image.src = objectURL
        document.body.appendChild(image)
      }
      catch (error) {
        console.log(error)
      }
    }
    ```
The error object will give a detailed error message of where in the code the error was thrown.

* Option 2: chain a .catch code block
  ```js
    async function myFetchRequest(url) {
      let response = await fetch("holiday.jpg")
      if (!response.ok) {
        throw new Error(`HTTP error, status: ${response.status}`)
      }
      return await response.blob()
    }

    myFetch()
      .then((blob) => {
        let objectURL = URL.createObjectURL(myBlob)
        let image = document.createElement("img")
        image.src = objectURL
        document.body.appendChild(image)
      }) 
      .catch ((error) => console.log(error)
      )
  ```