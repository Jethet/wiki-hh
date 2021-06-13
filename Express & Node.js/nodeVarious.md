*params* is anything that comes after the column :  
Example: `req.params.customerId`  

``` js
const pool = new Pool({
  user: "",
  host: "localhost",
  database: "cyf_hotels",
  password: "",
  port: 5432,
});
```
*remember to put your Postgres username and password in the empty fields*  

## With .env variables:
`npm i dotenv`  
Make sure dotenv is in package.json  
Create file called .env and add:  
PGUSER=yourusername  
PGPASSWORD=yourpassword  
Add to file where pool is defined: 
``` js
require("dotenv").config();
```  

Use environment variables as follows (or with process.env.):  
``` js
const pool = new Pool({
  user: PGUSER,
  host: "localhost",
  database: "cyf_hotels",
  password: PGPASSWORD,
  port: 5432,
});
```

**Upgrade npm:** `npm install npm@latest -g`  

**npm no longer present in project:** `curl -qL https://www.npmjs.com/install.sh | sh`  
