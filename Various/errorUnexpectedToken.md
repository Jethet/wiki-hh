Error message is something like this:  
`Unhandled Rejection (SyntaxError): Unexpected token r in JSON at position 0`  

Fix: restart server or servers.

Fix 2: check the code to see if the response is accessed correctly: first the response data and then the properties.  
Example for fetch() request:  
```
.then((response) => response.json())
.then((info) => {
  let weather = info.data[0].weather.description
```
This can be taken apart as the json response (*info*), the item that is returned (*data*), the first item of that return  
(*[0]*) and from that the *weather* property, which is an object with the *description* property.