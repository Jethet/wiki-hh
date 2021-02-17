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

