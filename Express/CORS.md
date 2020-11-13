WEBSITE WITH EXAMPLES: https://expressjs.com/en/resources/middleware/cors.html
installation:  npm install cors

Enabling CORS on the Express app

You'll have to install and enable CORS in order to allow your JSON to be loaded
from a different server (glitch.me) than your React app was initially loaded (probably netlify.com).

in package.json add a dependency for "cors": "^2.8.5"

Then in your server.js add...

var cors = require('cors')

and

app.use(cors())
