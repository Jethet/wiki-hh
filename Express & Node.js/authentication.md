**Jason Web Token (JST)**  
A JST is given to a user who signs up or logs in to make sure the user can stay signed in, also when they go to a different part of the website. This used to be done with a **cookie**. Cookies are being abandoned for various reasons (storing and managing sessions is cumbersome, poor scalability, extra security needed, and problems with CORS). A JST does not create sessions.

JSON is a data text format that is easy to access, and can be used in any programming language. A token is a string of data that can represent something, for example an identity. A JWT consists of claimes. What these claims are, depends on the use case. A JWT is a string made up of three parts, seperated by dots and serialized using **base64**. One part is the header that contains the **hashing algorithm that was used to generate the sign and the type of the token.

No hash can be converted back to the original text. When this signature is sent back to the server, the server can verify that the client has not changed any details in the object.

With JWT, a user registers with an app as usual and can log in with their credentials (username and password). Instead of creating a session and setting a cookie, the server checks the user's ID and 'signature', and will send a JST if all of that is correct. This gives the user authorisation to do whatever they want (within the restrictions set). The token is useless after it expires. 




**Example of hashing password and authenticate user**  

``` javascript
const express = require("express");
const bcrypt = require("bcrypt"); // bcrypt is used to hash a password before saving it to database
const fs = require("fs"); // node's inbuilt file system module

const userDB = require("../database/db.json");
const { generateKeyPair } = require("crypto");

const router = express.Router(); // create a new router using Express' inbuilt Router method

// user registration - signup
router.post("/sign-up", async (req, res) => {
  const { name, email, password } = req.body;

  // check if the user already exists (check email)
  const existingUser = userDB.find((user) => user.email === email);
  if (existingUser) {
    res.status(400).send("This user already exists");
    return;
  }

  // calculate hash for password that user provided
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password, salt);

  // create new user object with id, name, email and hashed password
  let newUser = {
    id: userDB.length,
    name: name,
    email: email,
    password: hashedPassword,
  };
  // add new user to database array
  userDB.push(newUser);
  //  save the updated database array to the db.json file using fs MUST BE STRING FORMAT
  fs.writeFileSync("./database/db.json", JSON.stringify(userDB));
  res.status(200).send(newUser);
})
```

**bcrypt is an npm library to hash passwords. bcrypt includes salt so the salt does not have to be stored separately**