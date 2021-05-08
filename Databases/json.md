## .json data format

JSON is a type of file for structuring data in a readable way. It is also a really popular format for sending data across the web.  
JSON is a string representation of a Javascript object. 

The JSON object has two useful methods to deal with JSON-formatted content: parse and stringify.  
* `JSON.parse()` takes a JSON string and transforms it into a JavaScript object.
* `JSON.parse()` can take a function as a second argument that can transform the object values before they are returned.

Here the object’s values are transformed to uppercase in the returned object of the parse method:
``` javascript
const user = {
  name: 'Sammy',
  email: 'Sammy@domain.com',
  plan: 'Pro'
};

const userStr = JSON.stringify(user);

JSON.parse(userStr, (key, value) => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  return value;
});
```
**Trailing commas** are not valid in JSON, so `JSON.parse()` throws an error if the string passed to it has trailing commas.  

* `JSON.stringify()` takes a JavaScript object and transforms it into a JSON string.
* `JSON.stringify()` can take two additional arguments, the first one being a replacer function and the second a String or Number value to use as a space in the returned string.

The replacer function can be used to filter out values, as any value returned as undefined will be out of the returned string:  
``` javascript
const user = {
  id: 229,
  name: 'Sammy',
  email: 'Sammy@domain.com'
};

function replacer(key, value) {
  console.log(typeof value);
  if (key === 'email') {
    return undefined;
  }
  return value;
}

const userStr = JSON.stringify(user, replacer);
// "{"id":229,"name":"Sammy"}"
```