### Fetch requests

With fetch(), you can get resources asynchronously across the network. The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and returns a promise containing the response object. This is just an HTTP response, not the actual JSON. To extract the JSON body content from the response, we use the json() method.

``` javascript
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

To **POST** data in .json format, use `JSON.stringify()`:

``` javascript
const data = { username: 'example' };

fetch('https://example.com/profile', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
```

To **upload a file:**  
Files can be uploaded using an HTML `<input type="file" />` input element, FormData() and fetch(). Example:  
``` javascript
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.then(result => {
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});
```
