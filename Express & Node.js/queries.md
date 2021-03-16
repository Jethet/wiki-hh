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

A query string is the portion of a URL after ? (question mark) where data is passed to a web application and/or back-end database. The syntax is something like `url../...etc?value1=2&value2=3`.  

The data are used as variables in endpoint queries: `const value1 = req.query.value1`  

Other data that is taken from a url can be `req.params`: the params come from the path segment of the URL **after the : (column)**,  
that match a parameter in the route definition, such as an id: `req.params.customerId` where the path is `app.get("/customers/:id")`.  

The `req.body` is used in a POST request that adds new data from the body content (for example, a form). Each variable is posted with a value in the body of data that is sent with the POST request.



