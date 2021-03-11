## Express Router

Express has a 'mini-app' that is an easy-to-use mechanism for routing. The set-up is simple:  
* create a file `routes.js`
* create a router: `const express = require('express');` `const router = express.Router();`
* at the bottom of the `routes.js` file, export the router: `module.exports = router;`
* import the router into `app.js` at the top: `const route = require('./routes');`
* add a middleware for using router in `app.js` file: `app.use(route);`

The router middleware should be placed **before any url handling** if present in `app.js`, since code execution works  
from top to bottom.

If any additional routers are required, separate files similar to `routes.js` can be created and imported into `app.js`, with  
another middleware added in order for using that router.