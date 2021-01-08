### Query strings
A query string is the portion of a URL after the question mark ? where data is passed to a web application and/or back-end database. The syntax is something like `url../...etc?value1=2&value2=3`.  

The data are used in endpoints: `const value1 = req.query.value1`  

Other data that is taken from a url can be `req.params`: the params come from path segments of the URL **after the :**,  
that match a parameter in the route definition, such as an id: `req.params.customerId` where the path is `app.get("/customers/:id")`.  

The `req.body` is used in a post request that adds new data from the body content (for example, a form). 



### SQL QUERIES

**Tablenames** are the plural of the data in the table:  
*customer data* becomes *customers*  
*order data* becomes *orders*  

**ID fields** are the singular plus Id at the end:  
*customers* uses *customerId* for one customer  
*orders* uses *orderId* for one order  

#### SQL Datatypes

**TEXT**  
**single quotes! Postgres does not allow double quotes**
`WHERE customername = 'Brown';`  
*to escape a single quote, use double quote: `'O"Brien'`*  

**NUMERIC FIELDS (no quotes)**  
Use =, >, >=, < and <=  
Use <> to make sure entities are not equal to each other in any way

**DATE FIELDS**  
**single quotes! syntax depends on location and system setup for dates**  
`WHERE orderdate = '2020-05-14';`  
`WHERE orderdate > '2020-01-01';`  

**BOOLEANS**  
Boolean values TRUE and FALSE  

**Before creating a table:** use  
`drop table if exists *table name(s)*;`  

**CREATE A TABLE**  
```
CREATE TABLE [IF NOT EXISTS] table_name (
   column1 datatype(length) column_contraint,
   column2 datatype(length) column_contraint,
   column3 datatype(length) column_contraint,
   table_constraints
);
```

**SCHEMAS**  
To be able to work with tables in a schema, you add the schema name before the table name: production.product, for example.

**SELECT queries**  
* `SERIAL PRIMARY KEY` defines a unique identifier for each row that will automatically increment every time data is inserted
* `VARCHAR()` defines a column to hold text with a maximum length of characters
* `NOT NULL` defines the column as not nullable: a value must be set
* `DEFAULT` you can set a default value if the value cannot be null
* `INT`
* `TEXT`
* `BOOLEAN`
* `DATE`
*A database will reject any values that do not match the type!*  
* `INSERT INTO` *table name* (keyOne, keyTwo) `VALUES` ('value for keyOne', 'value for keyTwo', etc.). For multiple lines, supply a comma-separated list of rows after the VALUES keyword: `INSERT INTO` *table name* (keyOne, keyTwo) `VALUES` ('value1 for keyOne', 'value1 for keyTwo'), ('value2 for keyOne', 'value2 for keyTwo'), ('value3 for keyOne', 'value3 for keyTwo') etc.
* `REFERENCES` *table name*(*table key*) The type also has to be added, for example `INT`: `customer_id    INT REFERENCES customers(id)`
* `SERIAL` creates a sequence that generates a sequence of integers (often used as primary key column in a table by using `id SERIAL`). `SERIAL` creates an auto-increment column for a table.


**Subquery**  
* A complex query can be split into one *outer query* and *subqueries*.
* It is recommended to write each query and then nest them into the outer query (main query). Example:
```
select * from customers where id in (  
  select customer from orders where product_name = (  
    select id from products where name = 'Maximum' and type = 'Variable'  
    )  
    )  
```

**Foreign Key**  
Syntax: `FOREIGN KEY (column) REFERENCES parent_table (table_name)`  
* A foreign key is a column or a group of columns used to identify a row uniquely of a different table.
* The table that comprises the foreign key is called the referencing table or child table.
* The table to that the foreign key references is known as the referenced table or parent table.
* A table can possess multiple foreign keys according to its relationships with other tables. 

**To reference a foreign key**  
The *type* references the *table* and the (*column*) 
Example: `language SERIAL REFERENCES languages (id)  

* make the field in the parent table unique so that there is not more than one record that matches.   
Example: table *students* has *name*: put UNIQUE there or add it later on with: 
```
alter table students  
add constraint name unique (name)
```
* add a unique key for the field in the table that you are linking to in your new table. Example:  
```
create table class_attendance (
id SERIAL primary key,
student_id INT UNIQUE,
student_name VARCHAR(30) UNIQUE,
FOREIGN KEY (student_id) REFERENCES students (id),
FOREIGN KEY (student_name) REFERENCES students (name)
)
```
*SQL does not accept a comma after the last line!*

#### JOINING TABLES
A single query can combine information from many tables. This can be done in may ways:  
* only records that have data on both tables that are joined
* all records from one table and any matching records from the second table
* all records from one table matched with all records from the second table

**INNER JOIN**  
Inner join is the default. Inner join pulls back records that have matching values in both tables.  
Inner join returns only records with matching values in both tables.  
Use the full tablename `table_name.field_name`   Example: `customers.customerid`  
Syntax:  
```
SELECT column_names  
FROM table1  
INNER JOIN table2 ON table2.column_name = table1.column_name;  
```
Examples:  
```
SELECT customer.name  
FROM customers  
JOIN bookings ON customers.id = bookings.customer_id  
WHERE bookings.id = 1;  

SELECT * FROM bookings  
JOIN customers ON customer.id = bookings.customer_id  
JOIN hotels ON hotels.id = bookings.hotel_id;
```
Instead of `INNER JOIN` you can use `JOIN` since `INNER` is the default for `JOIN`. Example:  
```
SELECT companyname, orderdate, shipcountry  
FROM orders  
JOIN customers ON customers.customerid = orders.customerid  
```

**OUTER JOIN**  
Outer join  

**LEFT JOIN**  
With `LEFT JOIN` you pull back all records of the first table plus any matching records in the second table.  
```
SELECT column_names
FROM table1
LEFT JOIN table2 ON table1.column_name = table2.column_name
```  
**RIGHT JOIN**  
The opposite of `LEFT JOIN`: this query gets all matching records in the first table and all records in the second table.  

**FULL JOIN**  
Pulls all records in the first table and all records in the second table, even if the records have no linking field  
or if there is NULL somewhere.  
```
SELECT column_names
FROM table1
FULL JOIN table2 ON table1.column_name = table2.column_name
```  
**SELF JOIN**  
With `SELF JOIN` the table is linked to itself to find certain similarities or connections (for example, employees who report  
to other employees).  
Use an alias to rename the tables to be able to differentiate, for example the table *customers* can be aliased as *customersA*  
in a SELF JOIN with *customersB*, and these two are identical copies of the original table.  
Remember: the A and B have to be used for every column as well!  
```
SELECT column_names
FROM table_name AS tableA
JOIN table_name AS tableB USING tableA.column = tableB.column
WHERE condition
``` 

**SHORTCUTS**:  
With **USING** you have less typing when joining tables:  
```
SELECT *
FROM orders
JOIN customer_details USING (customerid)
```
(instead of using `JOIN customer_details ON customer_details.id = orders.customerid`)  

**NATURAL**  
NATURAL is shorthand for JOIN on a column that is the same in both tables.  
It can be used if naming is consistent across tables: the id's are the same in the parent table and the foreign key table.  
```
FROM table1
NATURAL JOIN table2
```
`NATURAL JOIN` **cannot** be used if there is more than one field with the same name in both tables!   
The `USING` or `JOIN ON` syntax has to be used in that case.  

**GROUP BY**  
A query can group data by any column:  
```
SELECT country, COUNT(*)
FROM customers
GROUP BY country DESC
```

**ALTER**
* To change the structure of an existing table, you use PostgreSQL ALTER TABLE statement. The syntax is:  
`ALTER TABLE table_name action;`
* The following changes to an existing table are available (data_type can be INT, VARCHAR, etc.):
```
ALTER TABLE table_name 
ADD COLUMN column_name data_type column_constraint;

ALTER TABLE table_name 
DROP COLUMN column_name;

ALTER TABLE table_name 
RENAME COLUMN column_name 
TO new_column_name;

ALTER TABLE table_name 
ALTER COLUMN column_name 
[SET DEFAULT value | DROP DEFAULT];

ALTER TABLE table_name 
RENAME TO new_table_name;

```

**UPDATE**  
Syntax: `UPDATE table SET column1 = value1, column2 = value2 WHERE condition;`  
**=> always include a WHERE condition, otherwise all rows will be updated**
Examples:  
`UPDATE customers SET name='John Smith', country='UK' WHERE id=3;`  
`UPDATE bookings SET nights = 5 where customer_id = 1 and hotel_id = 1;`  

**DELETE**  
Syntax: `DELETE FROM table WHERE condition;`  
**=> always include a WHERE condition, otherwise all rows will be deleted**  
The values will be deleted but the row is not gone (contrary to using **drop**).  
Example:  
`DELETE FROM bookings WHERE id = 4;`

