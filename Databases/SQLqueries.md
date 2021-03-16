### SQL KEYWORDS

SELECT                    MIN  
FROM                      MAX  
WHERE                    AVG  
AND                         SUM  
OR                            LIKE  
BETWEEN               DESC  
IN                             ASC  
DISTINCT                LIMIT    
ORDER BY              JOIN ON  
AS                            NULL  
HAVING  

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

**SELECT**  
Selecting all data from table:   
`SELECT *`  
`FROM *table_name*;`

Selecting with field names:  
`SELECT *column1*, *column2*, ...`  
`FROM *table_name*;`

Selecting distinct values (only one value for each type, ignores duplicates):  
`SELECT DISTINCT *column1*, *column2*, ...`  
`FROM *table_name*;`

**SELECT COUNT**  
*How many* records match? (e.g. how many items in a table)  
`SELECT COUNT (*column1*)`  
`FROM *table_name*;`  
or for all rows:  
`SELECT COUNT (*)`  
`FROM *table_name*;`  

Combine with **DISTINCT**:  
`SELECT COUNT (DISTINCT *column*)`  
`FROM *table_name*;`  

**Combining fields for calculations**  
`SELECT *column1* + *column2*`  
`SELECT *column1* / 1.1;`  

**WHERE to narrow down selection**  
`SELECT *column1*, *column2*`  
`FROM *table_name*`  
`WHERE *condition*;`  
Example: `SELECT * FROM COMPANY WHERE AGE >= 25 OR SALARY >= 65000;`  
Example with Regex: `SELECT * FROM COMPANY WHERE NAME LIKE 'Pa%';`  

**LOGICAL OPERATORS: AND, OR, NOT**  
* Using AND with WHERE: all conditions must be true for a record to be selected  
`WHERE *condition1* AND *condition2* AND *condition3* ...;`  
* Using OR with WHERE: one of the conditions must be true for a record to be selected  
`WHERE *condition1* OR *condition2* OR *condition3* ...;`  
* Using OR with WHERE: a record will be selected if the condition(s) is not true  
`WHERE NOT *condition*;`  
* Combining AND, OR and NOT with WHERE: *use parentheses to group for clarity!*  
`WHERE (*condition1* AND *condition2*) OR *condition3*;`  

**BETWEEN operator**  
BETWEEN is a shortcut for >= xxx AND <= xxx  
`WHERE *column* BETWEEN xxx AND xxx;`  

**IN operator**  
In queries many conditions (WHERE id=2 OR id=9 OR id=15 OR id=18 OR id=22) you can use  
`WHERE id IN (2, 9, 15, 18, 22);`  

It can also be used to find values between two numbers:  
`WHERE id IN (20, 50);`  
This will select each id that is between 20 and 50.  

**ORDER BY**  
To get ordered results, ascending or descending:  
`SELECT DISTINCT *column*`  
`FROM *tablename*`  
`ORDER BY *column* ASC;`  (or `DESC`)  

Also here you can add more columns to search in:  
`SELECT DISTINCT *column1*, *column2*`  
`FROM *tablename*`  
`ORDER BY *column1* ASC, *column2* ASC;`  

**MIN MAX**  
Can be used for dates as well (earliest - latest).  
`SELECT MAX *column*`  
`FROM *tablename*;`  

**AVG**  
Calculate the average:  
`SELECT AVG (*column*)`  
`FROM *tablename*`  
`WHERE *condition*;`  

**SUM**  
Calculate the number/amount:  
`SELECT SUM (*column*)`  
`FROM *tablename*`  
`WHERE *condition*;`  

**LIKE and ILIKE**  
Match patterns with `LIKE`:  
`SELECT *column1*, *column2*`  
`FROM *table_name*`  
`WHERE *column* LIKE *pattern*;`  

**Using % you create a pattern:**  
`WHERE suppliername LIKE 'a%';` (all supplier names starting with a)  
`WHERE suppliername LIKE '%t';` (all supplier names ending on t)  
`WHERE suppliername LIKE '%ker%';` (all supplier names with ker in name somewhere)  
`WHERE suppliername LIKE 'A%i';` (all supplier names starting with A and ending with i)  
**The pattern with LIKE is case-sensitive! If you use ILIKE, it is not case-sensitive.**  

**Underscore: _**  
Match patterns with `_`: here `_` stands for *any* single character and can be used for an open character space:  
`WHERE contactname LIKE '_a%';` uses an open space and 'a' as second letter  
`WHERE contactname LIKE 'E_%_%';` name starts with 'E' and has at least two other letters  

**AS**  
setting an alias name to columns with AS: you can do a query and give the result a column name for clarity:  
`SELECT price * quantity AS TotalSpent`  
`FROM order_details;`  
Since the alias column first has to be created with the SELECT statement, you cannot use `FROM`, `WHERE` or `HAVING`.  
It is possible to use `GROUP BY` and `ORDER BY` because these statements are evaluated after `SELECT`.  

**LIMIT**  
To control the number of records returned by a search query:  
`SELECT *column*`  
`FROM *table_name*`  
`LIMIT *number*;`  
Example:  
```
SELECT productid, unitprice * quantity AS BiggestOrder  
FROM order_details  
ORDER BY BiggestOrder DESC  
LIMIT 5;  
```

**NULL**   
* The `NULL` value is a special value that signifies **unknown** (not zero or empty).
* If there is no value in a particular field, PostgreSQL will put NULL as the default.
* **Search syntax**: there are two options to search for NULL values:  
```
SELECT *column_names * 
FROM *table_name*  
WHERE *column* IS NULL  

SELECT *column_names * 
FROM *table_name*  
WHERE *column* IS NOT NULL  
```

**EXTRACT**
With `EXTRACT FROM` you get a field from a date or time value:  
`SELECT EXTRACT(YEAR FROM *date*)`  
or  
`EXTRACT *field* FROM *condition*`  
Example:    
`SELECT * FROM bookings`  
`WHERE EXTRACT(year from checkin_date) = 2020;`  



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
With `SELF JOIN` the table is linked to itself to find certain similarities or connections (for example, employees who  report to other employees).  
Use an alias to rename the tables to be able to differentiate, for example the table *customers* can be aliased as  *customersA* in a SELF JOIN with *customersB*, and these two are identical copies of the original table.  
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
