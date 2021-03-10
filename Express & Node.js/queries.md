
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
This will print the query property key and teh value.  


