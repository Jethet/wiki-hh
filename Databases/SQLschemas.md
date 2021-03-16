### SQL name syntax

**Table names:** a tablename is the plural noun of the data in the table:  
*customer data* becomes *customers*  
*order data* becomes *orders*  

**ID fields:** an ID field name is the singular noun plus Id at the end:  
the table *customers* has the field *customerId* for one customer  
the table *orders* has the field *orderId* for one order  

#### SQL Datatypes

**TEXT**  
**single quotes! Postgres does not allow double quotes**
`WHERE customername = 'Brown';`  
*to escape a single quote, use double quote: `'O"Brien'`*  
TEXT is used for input of an unlimited number of characters  

**VARCHAR**  
Use VARCHAR(n) when you want PostgreSQL to check the length limit (n) of the input.  

**NUMERIC FIELDS (no quotes)**  
Use =, >, >=, < and <=  
Use <> to make sure entities are not equal to each other in any way.

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

**INSERT DATA**  
To insert data into a table, use:  
`INSERT INTO` *table name* (keyOne, keyTwo) `VALUES` ('value for keyOne', 'value for keyTwo', etc.).  
For multiple lines, supply a comma-separated list of rows after the VALUES keyword:  
`INSERT INTO` *table name* (keyOne, keyTwo) `VALUES` ('value1 for keyOne', 'value1 for keyTwo'),  
('value2 for keyOne', 'value2 for keyTwo'), ('value3 for keyOne', 'value3 for keyTwo') etc.  


**SCHEMAS**  
To be able to work with different tables in a schema, you add the schema name before the table name: production.product, for example (see SQLqueries/JOINING TABLES).

Data types:  

* `SERIAL PRIMARY KEY` defines a unique identifier for each row that will automatically increment every time data is inserted
* Options are `SMALLSERIAL`, `SERIAL` and `BIGSERIAL`.
* `VARCHAR()` defines a column to hold text with a maximum length of characters
* `NOT NULL` defines the column as not nullable: a value must be set
* `DEFAULT` you can set a default value if the value cannot be null
* `INT`
* `TEXT`
* `BOOLEAN`
* `DATE`
*A database will reject any values that do not match the type!*  
* `SERIAL` creates a sequence that generates a sequence of integers (often used as primary key column in a table by using `id SERIAL`). `SERIAL` creates an auto-increment column for a table.


**TO REFERENCE TABLE KEYS**  
`REFERENCES` *table name*(*table key*) The type also has to be added, for example `INT`: `customer_id    INT REFERENCES customers(id)`

**Foreign Key**  
Syntax: `FKcolumn TYPE REFERENCES parent_table (table_name)`  
* A foreign key in PostgreSQL states that values in the first table column must appear with values in the second table column.
* A foreign key is a column or a group of columns used to identify a row uniquely of a different table.
* The data type must be stated.
* The table that comprises the foreign key is called the referencing table or child table.
* The table to that the foreign key references is known as the referenced table or parent table.
* A table can possess multiple foreign keys according to its relationships with other tables. 

**To reference a foreign key**  
The *type* references the *table* and the (*column*) 
Example: `product SERIAL REFERENCES products (id)  

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
Example: `ALTER TABLE customer ADD COLUMN id SERIAL PRIMARY KEY` will add a primary key to the column customer.  

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
Example: `DELETE FROM bookings WHERE id = 4;`

**DELETE CASCADE**  
When deleting records in PostgreSQL, foreign key relationships that may exist between these records and records in a  different table. Using the DELETE CASCADE option ensure that all child records are also deleted when a parent record is  deleted.  

**DROP TABLE to delete**  
`DROP TABLE table_name;` This statement is used to remove a table definition and all associated data, indexes, rules,  
triggers, and constraints for that table.  
To **delete a column** from a table, use 
```ALTER TABLE table_name 
DROP COLUMN column_name;
```


### Error messages
(Example from BoundlessBooks project) 
```
CREATE TABLE IF NOT EXISTS book_card (
	id SERIAL PRIMARY KEY,
	author_name VARCHAR(50) UNIQUE,
	title VARCHAR(150),
	language VARCHAR(15) UNIQUE,
	FOREIGN KEY (author_name) REFERENCES authors (name),
	FOREIGN KEY (language) REFERENCES languages (language)
);
```
**Errors**:  
```
ERROR:  syntax error at or near "author_name"
LINE 6:  FOREIGN KEY author_name REFERENCES authors (name),
                     ^
SQL state: 42601
Character: 147
```
*the `author_name` here should be between () (see examples Foreign Key in text above)*  

```
ERROR: there is no unique constraint matching given keys for referenced table "authors"
SQL state: 42830  
```
*In postgresql all foreign keys must reference a unique key in the parent table. In this example of the book_card*  
*the table `authors` should have 'unique' as value: `author_name VARCHAR(50) UNIQUE` and the original*  
*name in the authors table also should have 'unique' as value*