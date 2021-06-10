### Endpoints

**Sequence matters:** the more specific endpoints asking for params, such as for `/items/:id`, have to come AFTER the more general ones, otherwise the execution will happen there when you use a general query such as `/items/search`.

**Endpoint query needs to be specific**  
Example:  
``` javascript
http://localhost:3000/products/product?name=Ball
```
uses `products/product` in the endpoint. That is why using 
``` javascript
http://localhost:3000/products?name=Ball
```
will not work to get only the products with that name: it will get all products. The query itself is for the *name*:  
``` javascript
req.query.name
```


It is possible to loop through query parameters. Express will populate the Request.query object:  
``` javascript
app.get("/", (req, res) => console.log(req.query))
```  
The Request.query object is filled with a property for each query parameter. If there are no query params, it is an empty object. This makes it easy **to iterate on the query object** in a for loop:  
``` javascript
for (const key in req.query) {
  console.log(key, req.query[key])
}
```
This will print the query property key and the value.  

### Query strings, params and body

A query string is the portion of a URL **after the first ?** (question mark) where data is passed to a web application and/or backend database. The syntax is something like `url../...etc?value`. Examples:  
``` javascript
http://example.com/foo?bar
http://example.com/foo/foo/foo?bar/bar/bar
http://example.com/?bar
http://example.com/?@bar._=???/1:
http://example.com/?bar1=a&bar2=b
```
In the query string, each parameter is listed one right after the other with an ampersand (&) separating them. The order of the query string parameters does not matter.

A common convention is to use the query component for key-value pairs (see last example). The main use-case of the query string  
is filtering and specifically two special cases of filtering: searching and pagination. 

The data that is returned is used as variables in endpoint queries:  
``` javascript
const value1 = req.query.value1
``` 

Other data that is taken from a url are `req.params`: the params come from the path segment of the URL **after the : (column)**,  
that match a parameter in the route definition, such as an id. For example, the path is  
``` javascript
app.get("/customers/:id")
```
and the values are obtained by using 
``` javascript
const customerId = req.params.id
```

The `req.body` is used in a POST request that adds new data from the body content (for example, a form). Each variable is posted with a   
value in the body of data that is sent with the POST request. When using integers (for example an id number) you need to use  
``` javascript
const productId = parseInt(req.params.id)
```

**Path parameters** are part of the endpoint itself and are not optional. For example, in the following endpoint, `{user}` and `{bicycleId}` are required path parameters:  
``` javascript
/service/myresource/user/{user}/bicycles/{bicycleId}
```
Path parameters are usually set off with curly braces. With path parameters, **the order does matter**.

To **delete an item in a database array:**  
``` javascript
app.delete("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);

  const item = itemArray.find((item) => item.id === itemId);
  if (item) {
    const index = itemArray.findIndex((item) => item.itemId == itemId);
    itemArray.splice(index, 1);
    res.status(201).send({ success: true });
  } else {
    res.status(404).send("This item does not exist");
  }
});
```

**POST request including timestamp:**  
With `item.timeSent = new Date()` in a post request, you will add the timestamp to each new item that is posted.
