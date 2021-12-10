## Validation

**Email validation**  
* Check if email contains the correct ASCI characters and consists of two parts separated by @.
* Check if email is empty
Example from a PUT request to change the email of a customer:  
```js
const newEmail = req.body.email;
const mailformat = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  if (!newEmail.match(mailformat) || newEmail.length === 0) {
    res.send("The email address is not correct.")
  }
```
NB: `myStr.match()` is used to check if a string matches a regular expression.  

Validation function:
```js
let form = document.querySelector("#form");
let email = document.querySelector("#email")

function validateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
```
