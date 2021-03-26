### Endpoints

**Endpoint query needs to be specific**  
Example: `http://localhost:3000/products/product?name=Ball` uses `products/product`.  
Using `http://localhost:3000/products?name=Ball` will not work to get only the products with that name: it will get all products.  
The query itself is for the *name*: `req.query.name`  


It is possible to loop through query parameters. Express will populate the Request.query object:  
`app.get("/", (req, res) => console.log(req.query))`  
The Request.query object is filled with a property for each query parameter. If there are no query params, it is an empty object. This makes it easy **to iterate on the query object** in a for loop:  
```
for (const key in req.query) {
  console.log(key, req.query[key])
}
```
This will print the query property key and the value.  

### Query strings, params and body

A query string is the portion of a URL **after the first ?** (question mark) where data is passed to a web application and/or backend database. The syntax is something like `url../...etc?value`. Examples:  
```
http://example.com/foo?bar
http://example.com/foo/foo/foo?bar/bar/bar
http://example.com/?bar
http://example.com/?@bar._=???/1:
http://example.com/?bar1=a&bar2=b
```
In the query string, each parameter is listed one right after the other with an ampersand (&) separating them. The order of the query string parameters does not matter.

A common convention is to use the query component for key-value pairs (see last example). The main use-case of the query string  
is filtering and specifically two special cases of filtering: searching and pagination. 

The data that is returned is used as variables in endpoint queries: `const value1 = req.query.value1` 

Other data that is taken from a url are `req.params`: the params come from the path segment of the URL **after the : (column)**,  
that match a parameter in the route definition, such as an id. For example, the path is `app.get("/customers/:id")` and the values are  
obtained by using `const customerId = req.params.id`.

The `req.body` is used in a POST request that adds new data from the body content (for example, a form). Each variable is posted with a   
value in the body of data that is sent with the POST request. When using integers (for example an id number) you need to use `const productId = parseInt(req.params.id)`.

**Path parameters** are part of the endpoint itself and are not optional. For example, in the following endpoint, {user} and {bicycleId} are required path parameters: `/service/myresource/user/{user}/bicycles/{bicycleId}`. Path parameters are usually set off with curly braces. With path parameters, the order does matter.

