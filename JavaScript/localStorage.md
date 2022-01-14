## Local storage

### Imortant: local storage can only store strings
To work around this, use JSON methods. To **store** objects or arrays as values in localStorage, use `JSON.stringify()` to convert them into strings. When creating or updating key/value pairs in localStorage, use `JSON.stringify()` with the object or array as the argument:
```js
let myObj = { name: 'Skip', breed: 'Labrador' };
localStorage.setItem(key, JSON.stringify(myObj));
```
To **read and return** stringified values, use `JSON.parse()`. The `JSON.parse()` method takes JSON strings and converts them into JavaScript objects. `JSON.parse()` takes `.getItem()` as its argument:
```js
let item = JSON.parse(localStorage.getItem(key))
```
### Local storage methods

* **create entries** with the `setItem()` method. The `setItem()` method takes two arguments, the key and corresponding value:
```js
let key = 'Item 1';
localStorage.setItem(key, 'Value');
```
 
* **read entries** with the `getItem()` method. `The getItem()` method takes one argument which must be the key. This function will return the corresponding value as a string:
`let myItem = localStorage.getItem(key)`
This code sets myItem equal to 'Value', which is the corresponding value for key.

* **update entries** also with the `setItem()` method. Again, it takes two arguments: the key argument will be an existing key, and the value argument will be a new value: `localStorage.setItem(key, 'New Value')`  
Now the localStorage value for key is 'New Value' instead of 'Value'.