## Using PostgreSQL

**Find configuration with pgAdmin**  
* open pgAdmin
* right-click on PostgreSQL database
* click on *properties*
* choose *connection* in the popup screen
* it will show *host*, *port* and *username*  

**Connect to PostgreSQL database server with psql terminal programme**  
In the PostgreSQL application package you will find the SQL Shell (psql).app. It allows you to interact with the PostgreSQL database server.  
* launch the psql programme and connect to the PostgreSQL database server  
* use Enter to walk through the lines; fill in password  D(voluit)@jaar (also masterpassword)


**Basic syntax**  
`psql --port=5432 --host=localhost --dbname=*nameDbase* --username=postgres`  

**or**  
`psql -p 5432 -h localhost -d *nameDbase* -U postgres`  

When you hit return, you will be asked for your password. If password is accepted, the next line will show you the database you are connected to.

**Shortcut for connection**  
You can override with the command  
`psql -d *nameDbase*`  
*When you use Fn F5 in pgAdmin now and open a query window, it should show the name of the database that you have chosen to connect with.*  

Other ways to avoid typing all the connection parameters are:  
* using environment variables using export PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE, and set these for the connection
* create a .pgpass file in the home directory with  hostname:port:database:username:password  
(example: `localhost:5432:*nameDbase*:postgres;*password*`)
* if you use **multiple databases** you can set up a .pg_service.conf file that contains multiple settings: 
``` 
[service_name]  
host=localhost  
port=5432  
dbname=nameDbase*  
user=postgres  
password=*password*  
```  
To connect, use:  
`psql service=service_name *OR* export PGSERVICE=service-name`  

### Command line for PostgreSQL
**Use the same database keywords for SQL on the command line as in pgAdmin**  

**Stop** run: `q`  
**Quit** programme: `\q`  
Check **version**: `psql -V `   
**Create** database: `createdb NAME_DB `   
**Connect** to database: `psql NAME_DB  `  
**Execute** SQL code in file: `psql -d *database* -f exampleFile.sql  `  
See **list** of databases: `\l `  
**Clear** terminal: `\! clear`  
Connect to **other** database: `\c *database* `  
**Show users**: (postgres as superuser) `\du`  
**Login**: `psql -U postgres -h localhost` `psql -U username -W postgres`  

### Schemas in psql terminal:
See **schemas list**: `\dn`  
See **list of schema tables**: `\dt exampleSchema.`  
See **schema table data**: `SELECT * FROM exampleSchema.table;`  
