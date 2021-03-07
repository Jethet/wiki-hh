
**Endpoint query needs to be specific**  
Example: `http://localhost:3000/products/product?name=Ball` uses `products/product`.  
Using `http://localhost:3000/products?name=Ball` will not work to get only the products with that name: it will get all products.  
The query itself is for the *name*: `req.query.name`  


