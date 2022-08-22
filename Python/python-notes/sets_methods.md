**Sets:**  
A set is an unordered collection with no duplicate elements (contrary to a list, all items in a set are *unique*). A set is defined by curly brackets {}. Sets are mutable: items can be changed.

**Methods:**  
add()        Adds an element to a set  
clear()      Removes all the elements from the set  
copy()       Returns a copy of a set  
difference()  Returns a set containing the difference between two or more sets  
difference_update() Removes the items in this set that are included in another, specified, set  
isdisjoint()  Returns whether two sets have an intersection or not  
issubset()    Returns whether another set contains this set or not  
issuperset()  Returns whether this set contains another set or not  
pop()         Removes an element from the set  
remove()      Removes the specified element  
symmetric_difference()  Returns a set with the symmectric differences of two sets  
symmetric_difference_update() Inserts the symmetric differences from this set and another  
union()     Returns a set containing the union of sets  
update()    Updates the set with another set, or any other iterable  

**Set removes duplicates automatically:**  
```py
basket = {'apple', 'orange', 'apple', 'pear', 'orange', 'banana'}
print(basket)  #returns {'apple', 'orange', 'pear', 'banana'}: no duplicates
```

**Test if item is in set:**  
```py
'orange' in basket  #returns True
'juice' in basket   #returns False
```
**Turn elements into a set:**  
set() turns any element into a set and *removes duplicates* at the same time but NOT THE SAME ORDER:  
```py
x = ['apple', 'orange', 'apple', 'banana', 'peach']
print(x)
print(set(x))  #returns {'peach', 'banana', 'orange', 'apple'}
```
**Set operations on unique letters in two words:**  
```py
a = set('abracadabra')
b = set('alacazam')
a     # unique letters in a => returns {'a', 'd', 'b', 'c', 'r'}
a - b # letters in a but not in b => returns {'d', 'r', 'b'}
a | b # letters in a or b or both => {'a', 'd', 'b', 'l', 'z', 'm', 'c', 'r'}
a & b # letters in both a and b => returns {'a', 'c'}
a ^ b # letters in a or b but not both => returns {'d', 'm', 'b', 'l', 'r', 'z'}
```

