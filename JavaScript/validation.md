## Validation

**Email validation**  
* Check if email contains the correct ASCI characters and consists of two parts separated by @.
* Check if email is empty
Example from a PUT request to change the email of a customer:  
```
const newEmail = req.body.email;
const mailformat = (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  if (!newEmail.match(mailformat) || newEmail.length === 0) {
    res.send("The email address is not correct.")
  }
```

