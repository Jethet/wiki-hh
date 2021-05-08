**Using HTML form with NodeJS**  
Example:
``` html
<h3>Create a blog post</h3>
<form action="/create" method="POST">
    <textarea name="blogpost" rows="10" cols="14"></textarea>
    <button type="submit">Send</button>
</form>
```

* The form has a text area and a Send button.
* The `action` attribute is the endpoint where the form data will be sent to.
* The name attribute will be used later to reference the data.

When you hit Send, the form will send a POST request to the server, using whatever is in the action  
attribute as the endpoint. In the example it is `/create`. The server will have to deal with the  
requests that come as POST request on the `/create` endpoint.

**Normally you would extract it using req.body.** When data has been POSTed to the server as FormData, we  
need to do things slightly differently to access the data that's come through in the request.  
To **extract the contents out of the special FormData object** you use **`express-formidable`**.  This  
is Express middleware that will extract the form data from the request and make it available to you when  
you do req.fields. It is not built-in, and needs to be installed: `npm install express-formidable --save`

In the server.js file:  
``` javascript
const formidable = require('express-formidable');

// 
// and add to the middleware:
app.use(formidable())
```
In the POST endpoint on the submit route, a new Formidable form is instantiated:  
``` javascript
app.post("/submit-form", (req, res) => {
  new formidable.IncomingFrom().parse(req (err, fields, files) => {
    if (err) {
      console.log("Error", error)
      throw err
    }
    console.log("Fields", fields)
    console.log("Files", files)
    files.map((file) => {
      console.log(file)
    })
  })
})
```
*A callback is needed to process all files and after formidable is ready, make them available to be **parsed**. You can also use events for this.*  
The Formidable file object has a number of methods that can be called:  
* `file.size` - the file size in bytes
* `file.path` - the path the file is written to
* `file.name` - the name of the file
* `file.type` - the MIME type of the file

