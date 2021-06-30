**Regex to check for valid email format:**  

``` javascript
const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
```

To check the format, use the `match()` method. This searches a string for a match against a regular expression, and returns the matches as an Array object.