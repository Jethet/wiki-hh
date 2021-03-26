* **Express middleware** are functions that execute during the lifecycle of a request to the Express server. Each middleware has access to the HTTP request and response for each route (or path) it’s attached to. In fact, Express itself is comprised wholly of middleware functions. Additionally, middleware can either terminate the HTTP request or pass it on to another middleware function using next. This “chaining” of middleware allows you to compartmentalize your code and create reusable middleware.

* A middleware functions has access to the request object (req), the response object (res) and the next function (next). It is prefaced by the http method and url path(route) of the request that triggers the function that is defined within. This function can execute any code, make changes to the request and response objects, end the request-response cycle, or call the next middleware in stack.

* When a request is received by the server, it is funneled through middleware functions from top to bottom, until it finds the middleware designed to handle that request. Then the middleware sends an appropriate response to the browser.

**Examples of middleware to be added:**  
To work with .json data, add:  
```
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(route);
```
**route always has to come AFTER the express.json() otherwise you get 'undefined' errors**  

To serve static files with Express, use express.static(): `app.use(express.static("public"));`  

To parse form data (extract data from a FormData object), use express-formidable:    
```
const express = require('express');
const formidableMiddleware = require('express-formidable');

var app = express();

app.use(formidableMiddleware());

app.post('/upload', (req, res) => {
  req.fields; // contains non-file fields
  req.files; // contains files
}); ```