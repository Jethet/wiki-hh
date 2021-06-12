**Instead of creating an external database, you can work with a database file in your project**  

Example to set up a simple user database:

* Create a db.json file with an empty array and import this: `const userDB = require("./db.json");` (whatever the file path is)
* Create a new user with a POST request, for example name, email and password
* add the new user to the userDB: `userDB.push(newUser)`
* save the userDB array to the file db.json: `fs.writeFileSync("./db.json", JSON.stringify(userDB))`

*see in file json.md in folder Databases for info on JSON.stringify*