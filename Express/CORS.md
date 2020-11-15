# Enabling CORS on an Express app

You have to install and enable CORS in order to allow your JSON to be loaded  
from a different server than your React app was initially loaded.

* installation:  npm install cors

* in package.json you should see a dependency:  `cors: "^2.8.5"`

* Then in your server.js add `var cors = require('cors')`  
and `app.use(cors())`

WEBSITE WITH EXAMPLES: https://expressjs.com/en/resources/middleware/cors.html

# Cors error

This is a common problem when you try to send requests from one "origin" (the hostname  
in the URL) to another. You need to configure the server to send some headers that tell  
the browser that it accepts requests from other places. So if your website is running at  
https://example.com and you send a request to an API at https://my-api.com, the API must  
respond with some headers to say "I accept requests from other origins", otherwise it will  
be blocked in the browser

The main use case for CORS is this:
* your API has some authentication (e.g. it uses cookies to identify which user made the request)
* I log into your API (so I have a valid cookie in my browser)
* I go to a different website, but on that website it makes a fetch to your API
* and without realising it, I performed an action on your API  

If you want to restrict to a specific origin, you should write the full URL:  
res.header('Access-Control-Allow-Origin', 'https://*name-of-domain-deployment*').  

If your API has no authentication then you don't need to worry about limiting access

`app.use(function(req, res, next) {
  // update to match the domain you will make the request from:
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});`