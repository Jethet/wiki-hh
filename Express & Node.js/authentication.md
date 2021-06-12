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