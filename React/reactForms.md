### React forms

In a controlled form component, the component uses *controlled inputs*: you control the input by creating state to hold the input, updating that state when the value changes, and tell the input what value to display.

Use a hook with a data object that has all the input fields:  
```js
const [data, setData] = useState({
  name: "",
  email: "",
  message: "",
})
```

The form input field needs to have `name`, `type`, `value` and the `onChange` function:  
```js
<div>
  <label htmlFor="name">Name</label>
  <input
    id="name"
    name="name"
    type="text"
    value={data.name}
    onChange={handleChange}
  />
</div>
```
The `handleChange` is:  

```js
const handleChange = (e) => {
  setData({
    ...data,
    [e.target.name]: e.target.value,
  });
};
```

Websites:
https://javascript.info/formdata
https://javascript.info/forms-submit
https://javascript.info/events-change-input
https://ibaslogic.com/simple-guide-to-react-form/

Storage with JSON:
https://www.bitnative.com/2020/07/06/four-ways-to-fetch-data-in-react/