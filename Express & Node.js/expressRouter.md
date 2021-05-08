## Express Router

Express has a 'mini-app' that can be used for routing. It provides more functionality by subdividing the web application rather  
than including all of the functionality on a single page. The express.Router() function is used to create a new router object.  
This function is used when you want to create a new router object in your program to handle requests. The set-up is simple:  
* create a file `routes.js`
* create a router: `const express = require('express');` `const Router = express.Router();`
* at the bottom of the `routes.js` file, export the router: `module.exports = Router;`
* import the router into `app.js` at the top: `const route = require('./routes');`
* add a middleware for using router in `app.js` file: `app.use(route);`

The router middleware should be placed **before any url handling** if present in `app.js`, since code execution works  
from top to bottom.

If any additional routers are required, separate files similar to `routes.js` can be created and imported into `app.js`, with  
another middleware added in order for using that router.

With express.router we can simplify our code. Instead of specifying the path every time for a specific request, we can specify  
the path once and then chain the request methods to that path using the express router. The .all will be applied to all types of  
request methods, and the other paths will be applied based on the request method. In `routes.js`:  
``` js
Router.route('/') 
.all((req, res, next) => {  
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    next(); 
}) 
.get((req, res, next) => { 
    res.end('This is a GET request.'); 
}) 
.post((req, res, next) => { 
    res.end('This is a POST request.'); 
}) 
.put((req, res, next) => { 
    res.end('This is a PUT request.'); 
}) 
.delete((req, res, next) => { 
    res.end('This is a DELETE request.'); 
}); 
```

**This means requests can be made like this (example with form data):**  
``` js
const express = require('express');
const router = express.Router();

router.get('/add-username', (req, res,next) => {
   res.send('<form action="/post-username" method="POST"> <input type="text" name="username"> <button    type="submit"> Send </button> </form>');
});

router.post('/post-username', (req, res, next)=>{
   console.log('data: ', req.body.username);
   res.redirect('/');
});
module.exports = router;
```
**res.end()**  
`res.end()` will end the response process. This method actually comes from Node: response.end() method of http.ServerResponse.  
It is used to quickly end the response without any data.  
