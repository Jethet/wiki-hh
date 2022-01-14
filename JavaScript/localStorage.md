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
```js
let myItem = localStorage.getItem(key)
```
This code sets myItem equal to 'Value', which is the corresponding value for key.

* **update entries** also with the `setItem()` method. Again, it takes two arguments: the key argument will be an existing key, and the value argument will be a new value:
```js
localStorage.setItem(key, 'New Value')
```  
Now the localStorage value for key is 'New Value' instead of 'Value'.

* **delete** with the `removeItem()` method. The `removeItem()` method takes one argument which will be a key of the localStorage object:
```js
localStorage.removeItem(key);
```

* **clear** with the `clear()` method you will remove **all items** from local storage:
```js
localStorage.clear();
```

### Checking for items in local storage
Use `if` statements to check if localStorage has items or is empty. First, check the length of localStorage:
```js
if (localStorage.length > 0) {
  // ...
}
```

If `localStorage.length` is greater than 0, then it contains items. Use an `else` statement in case there are no items in localStorage:
```js
if (localStorage.length > 0) {
  // ...
} else {
  // ...
}
```

###  Iterating items in local storage
1. The `forEach` method cannot be used on`localStorage`. Use a `for` loop:
```js
for (let i = 0; i < localStorage.length; i++){
  // ...
}
```
2. The `key()` method takes an integer as an argument and returns the corresponding key. With a `for` loop, pass `i` in as the integer for `key()`:
```js
for (let i = 0; i < localStorage.length; i++){
  let key = localStorage.key(i);
}
```
3. Use the `getItem` method to return the corresponding value for key:
```js
for (let i = 0; i < localStorage.length; i++){
  let key = localStorage.key(i);
  let value = localStorage.getItem(key);
}
```
4. Create a console.log statement to print both key and value to the screen:
```js
for (let i = 0; i < localStorage.length; i++){
  let key = localStorage.key(i);
  let value = localStorage.getItem(key);
  console.log(key, value);
}
```
