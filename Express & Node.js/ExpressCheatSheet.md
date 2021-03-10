# Express Cheatsheet (adapted from nbogie)

## A minimal server with a few lines of code

```js
//after installing Express with npm i express, load the express module
const express = require('express');

const app = express();
// no need to install bodyParser: Express has its own json parser included
// (https://dev.to/eclecticcoding/express-and-body-parser-khf)
app.use(express.json())
app.use(express.urlencoded())

// test page
app.get('/', (request, response) => {
  response.send("hello Express world!")
});

// start the server and make sure it prints a message to show it is working
app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests.");
});
```


## Adding a route

A *route* is a path and HTTP method that the server can handle:

```js
app.get('/', (request, response) => {
  response.send("hello Express world!")
});
```

The above shows a *route handler* being registered which will be used to handle a client HTTP GET request to the '/' path.  It will respond with the string (text) "hello Express world!"

* Notice the `app.get` in the beginning - this determines the method for this route.  Other common methods include 'post', 'put', and 'delete'.

* Calling `app.get(...)` in this way does NOT make a request. It registers the route handler so that whenever the server gets a matching HTTP request, it knows to call the function given here in the second parameter.

  * When that happens, two objects, request and response will be passed as parameters to our route handler. These represent 
    * the received HTTP request, which can be examined by the route handler (e.g. to find route or query parameters, or content in the request body), AND 
    * the HTTP response under construction (not yet sent), which our handler will generally fill in (perhaps including requested content in the body of the response) and set a status code on to indicate the outcome of the processing of the request.


# Basic C.R.U.D. operations (Create Read/Retrieve Update Delete)

## CREATING a resource

To allow the user to create a new instance of a resource, create the route handler to:

* match the `POST` HTTP method, and 
* use a route path of `/quotes`

```js
app.post('/quotes', function (request, response) {

  const newQuote = request.body
   //TODO:...
});
```

Note: the new content is normally submitted as part of the request body, and accessed with `request.body`.
However, before this is possible, see the following section `Accessing request.body in a POST request`.

## Accessing request.body in a POST request
If you are going to use the body of a POST request in a route handler, you will have to add one of two lines to first process the body. How you do this depends on how the request has been submitted.  

### If the request has come from an HTML form:

if it has been submitted by HTML form you need to add the line
```app.use(express.urlencoded({ extended: false }))```

### If the request has come from `fetch` (e.g. in React), or from Postman

if it has come from a HTML form you need to add the line
```app.use(express.json())```  (for parsing application/json)  

In both cases you can then use `request.body` to get either an object of key-value pairs, or the JSON which was posted.

[Official Express.js documentation about req.body](https://expressjs.com/en/api.html#req.body)

## READING/RETRIEVING a resource

To read *all* resources we make a route handler to match the `GET` HTTP method, and a route path of `/quotes`

To read *one* resource we make a route handler to match the `GET` HTTP method, and a route path of `/quotes/:id`, in order to match GET requests to real paths such as /recipe/117

## UPDATING a resource

To allow the user to update a resource, such as a recipe, we'd create the route handler to:

* match the `PUT` HTTP method, and 
* use a route path of `/quotes/:id`, to match an example of /recipes/117

```js
app.put("/quotes/:id", function (request, response) {
  const quoteId = request.params.id;
  
  //TODO: find the quote with the matching id
  

});
```

As with POST requests which create resources, we expect the changed content in the request body.
* This is accessed with `request.body`
* You must first use `app.use(express.json())` or `app.use(express.urlencoded({ extended: false }))` as discussed above in the section [Accessing request.body in a POST request]("#Accessing+request.body+in+a+POST+request)



## DELETING a resource

To allow the user to delete a resource by id, create the route handler to:

* match the `DELETE` HTTP method, and 
* use a route path of `/quotes/:id` to match an example of /quotes/117, as follows:

```js
app.delete('/quotes/:id', function(req, res) {
  
  //look in the request params to get the id of the recipe to delete:
  const quoteToDelete = request.params.id;
  
  //TODO: delete the quote with the matching id from the data source (in-memory array or database)
  //TODO: if the quote was found and deleted successfully, return status 204 and an empty body.
});
```

**Note that the request params will be strings, not numbers, so you may have to attempt to convert your id param to a number before trying to match it against recipe ids if those happen to be stored as numbers: `parseInt(request.params.id)`.**


## Extracting values of query parameters

* If you make a route with a path of `/quotes/search`
* ...and then you make a GET request for a URL like: http://localhost:3000/quotes/search?term=blue&author=Davids
* ...then you can obtain the query parameters from the request using: `request.query.term` and `request.query.author`

[Official Express.js documentation about req.query](https://expressjs.com/en/api.html#req.query)

## Extracting values of route parameters

* If you make a route with a path of `/quotes/:quoteId`
* ...and then you make a GET request for a URL like: http://localhost:3000/quotes/17
* ...then you can obtain the quoteId from the request using: `request.params.quoteId`

[Official Express.js documentation about Route Parameters](https://expressjs.com/en/guide/routing.html#route-parameters)


* `res.send()` automatically closes the connection.  
* `res.end()` can be used to send an empty response, without any body, to end the response process.  
* `res.status().end()` can be used to send a status message and end the process.  
* `res.status().send('error message')` can be used to send status message plus error message. For this, you can also use res.sendStatus(). This is a shortcut and will send both status code and error message:
  * `res.sendStatus(200)` is short for `res.status (200).send("OK")`
  * `res.sendStatus(200)` is short for `res.status (403).send("Forbidden")`
  * `res.sendStatus(200)` is short for `res.status (404).send("Not Found")`
  * `res.sendStatus(200)` is short for `res.status (500).send("Internal Server Error")`

`res.send` uses the Response.send() method that accepts any string.  
To send back JSON data to the client you can use the Response.json() method. This method accepts an object or arry,  
and converts it to JSON before sending it: `res.json({username: 'Jane Smith'})`

