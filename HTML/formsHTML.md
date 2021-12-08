## Submitting a form in HTML

```html
<form action="example/submit.html">
  Name: <input type="text" name="name"><br>
  Password: <input type="password" name="password"><br>
  <button type="submit">Log in</button>
</form>
<script>
  var form = document.querySelector("form");
  console.log(form.elements[1].type);
  // → password
  console.log(form.elements.password.type);
  // → password
  console.log(form.elements.name.form == form);
  // → true
</script>
```

* When a field is contained in a `<form>` element, its DOM element will have a property form linking back to the form’s DOM element. The `<form>` element, in turn, has a property called elements that contains an array-like collection of the fields inside it.

The name attribute of a form field determines the way its value will be identified when the form is submitted. It can also be used as a property name when accessing the form’s elements property, which acts both as an array-like object (accessible by number) and a map (accessible by name).
* A button with a type attribute of submit will, when pressed, cause the form to be submitted. Pressing Enter when a form field is focused has the same effect.
* Submitting a form normally means that the browser navigates to the page indicated by the form’s action attribute, using either a GET or a POST request. But before that happens, a "submit" event is fired. This event can be handled by JavaScript, and the handler can prevent the default behavior by calling preventDefault on the event object.
* In this example, we disable the regular way of submitting the form, and have our program handle the input, possibly using XMLHttpRequest to send it over to a server without reloading the page.
