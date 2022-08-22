**List methods:**  
**append()** Adds an element at the end of the list  
**clear()**	Removes all the elements from the list  
**copy()** Returns a copy of the list  
**count()**	Returns the number of elements with the specified value  
**extend()** Add the elements of a list (or any iterable), to the end of the current list  
**index()** Returns the index of the first element with the specified value  
**insert()** Adds an element at the specified position  
**pop()** Removes the element at the specified position  
**remove()** Removes the first item with the specified value  
**reverse()** Reverses the order of the list  
**sort()** Sorts the list

**Indexing** starts at 0. Last element is targeted with -1.
Using a colon (:) after element gets remainder of list (as a LIST):  
* myList[3:] will print all elements after element 3 (NOT index 3)
myList = [1,2,3,4,5,6,7,8]   
myList(3:) returns [4, 5, 6, 7, 8]
* myList[3:] in case of string list will print all elements after element 3:  
newList = ['a', 'b', 'c', 'd', 'e']  
newList[3:] returns ['d', 'e']

**Copying** is simple: myList(:) returns an exact copy of the list

**Concatenation** use +  Example: newList + ['f', 'g']  returns ['a', 'b', 'c', 'd', 'e', 'f', 'g']  

**Replacing items in list:** myList[4] = 'x'  returns [1, 2, 3, 4, 'x', 6, 7, 8]  
This means the element on INDEX 4 is changed (index = 0, 1, 2, 3, 4)

**append()** Examples:  
myList.append(25) returns [1, 2, 3, 4, 'x', 6, 7, 8, 25]
myList.append(7 + 12) returns [1, 2, 3, 4, 'x', 6, 7, 8, 25, 19]

**len()** len(myList) returns 10 (the number of elements in the list)  

**nesting** a list includes another list:  
x = [[1, 2, 3], [4, 5, 6]]
x[0][0] returns 1 (first element of first list)  
x[1][2] returns 6 (third element of second list)  

**list comprehension** makes it possible to write compact code:  
```py
# instead of writing:
y = []
for x in range(10):
  y.append(x*2)
  
#  you can write:
y = [x * 2 for x in range(10)]
```