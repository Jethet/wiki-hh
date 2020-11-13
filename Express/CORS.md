# Enabling CORS on an Express app

You have to install and enable CORS in order to allow your JSON to be loaded  
from a different server than your React app was initially loaded.

* installation:  npm install cors

* in package.json add a dependency:  `cors: "^2.8.5"`

* Then in your server.js add `var cors = require('cors')`  
and `app.use(cors())`

WEBSITE WITH EXAMPLES: https://expressjs.com/en/resources/middleware/cors.html
