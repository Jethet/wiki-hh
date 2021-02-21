**Using HTML form with NodeJS**  
Example:
```
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

To **extract the contents out of the special FormData object** you use **`express-formidable`**.  This  
is Express middleware that will extract the form data from the request and make it  available to you when   you do req.fields. It is not built-in, and needs to be installed: `npm install express-formidable --save`

In the server.js file: `const formidable = require('express-formidable');` (no - allowed in variable name)  
and `app.use(formidable())`
