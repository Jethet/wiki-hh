**Installation problems:**  
Remember to use `pip3 install`, not `pip`. After installing, restart VSC. This should remove the problem of module not found with pylance.

Python has five standard data types:
* Numbers
* String
* List
* Tuple
* Dictionary


The divmod() method takes two parameters x and y, where x is treated as numerator and y is treated as the denominator. The method calculates both x / y and x % y and returns both the values:
Input : x = 9, y = 3
Output :(3, 0)

Input : x = 8, y = 3
Output :(2, 2)


**Indexing:**  
Works forwards and backwards:  
P | Y | T | H | O | N 
--|---|---|---|---|--
0 | 1 | 2 | 3 | 4 | 5
-6 | -5| -4 | -3 | -2 | -1

**Booleans**  
* numbers are always True, except for the number 0
* strings are False only when empty
* lists, tuples, sets and dictionaries are only False when empty
* check a value with type(): `type(variable) == bool` (returns True or False)
* check with isinstance(): `isinstance(variable, bool)` (returns True or False)
* use any() to check if any of the values in an iterable are True: `any([myArray])` (returns True or False)
* with all() the same check is done but all() only returns True if all values passed to it are True

**Numbers**  
Three types: int, float and complex
```python
oneComplex = 2+3j
print(oneComplex)  #returns (2+3j)
myComplex = complex(2, +3j)
print(myComplex)  #returns (-1+0j)
print(myComplex.real) #returns -1.0
print(myComplex.imag) #returns 1.0
```

Number methods:
* abs() returns the absolute value of a number
* round() returns the value rounded to the nearest integer; with a second parameter the decimal point can be set: `round(0.1265, 3)` returns 0.127

Variables that should never change can be declared using uppercase: `MYCONSTANT = 25` to indicate they should not be changed (it will not prevent them to be overwritten, it's just convention)

**Strings**  
To go to a new line in a string, use `\n` *inside* the string:  
`"This is a string followed by another string \nThis is the next string`.

**Error handling in Python**  
The main distinguishable error types are:
* syntax errors (= parsing errors) are the most common
* exceptions: errors detected while executing

**Modules in Python**  
You can write a (long) program and save it as a module. This is known as creating a script. Modules can be imported across modules/applications to re re-used.

Creating one function to be repeated in a project as a module means that you only have to debug one function in case of an error: the function in that module.  


