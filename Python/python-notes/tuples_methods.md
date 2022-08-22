**Tuples:**  
A tuple is an ordered and *immutable* list of comma-separated items between brackets (). You cannot assign new values to a tuple but a tuple can contain objects that are variable (like a list, for example).

Assigning values to a tuple is called 'packing'. We can extract the values back into variables. This is called 'unpacking' (see below).

**Methods:**  
count() Returns the number of elements with the specified value  
index() Returns the index of the first element with the specified value  
tuple() Creates a tuple from the given value (for example, a list)  
```py
myTuple = (234, 567, 8910)
myTuple[0] #returns 234
print(myTuple.count(567)) #returns 1
print(myTuple.index(8910)) #returns 2

myList = [1, 2, 3]
x = tuple(myList)  #returns the tuple (1, 2, 3)
```

**Nesting:**  
Tuples can be nested: assign a tuple to a variable and add another tuple  
```py
newTuple = myTuple, (1,2,3,4)
# print(newTuple) returns ((234, 567, 8910, 8910), (1, 2, 3, 4))
```

**Variable objects in tuple:**  
```py
anotherTuple = (newTuple, ['a', 'b', 'c'])
anotherTuple[1][2] = 'd'  
#returns (((234, 567, 8910, 8910), (1, 2, 3, 4)), ['a', 'b', 'd'])
```
**Unpacking tuples:** assigning variables to values inside the tuple in the order of the variables given  
```py 
x, y = anotherTuple
print(x)  #returns ((234, 567, 8910, 8910), (1, 2, 3, 4)) => first value
print(y)  #returns ['a', 'b', 'd'] => second value
```

**Tuple comprehension:**  
Same as list comprehension but using the tuple() function:  
```py
x = tuple([x**2 for x in range(10)])  #returns (0, 1, 4, 9, 16, 25, 36, 49, 64, 81)
```