The Express package includes a json parser. Add this to the server code:  
``` javascript
app.use(express.json())
// or  
app.use(express.urlencoded({extended: true}))
```

The express.json() function is a **built-in middleware** function in Express. It parses incoming requests with JSON payloads  
and is based on body-parser.

Syntax:  
``` javascript
express.json( [options] )
``` 
The options parameter has various property like inflate, limit, type, etc.

Urlencoded does a similar thing, it parses the fields included in a urlencoded payload sent with a request to your server,  
and adds their values into a body object on the request. This is most commonly found when posting with an HTML form to your server,  
since urlencoding is the default. Passing the extended: true option to urlencoded will further parse nested structures sent in the urlencoded payload.