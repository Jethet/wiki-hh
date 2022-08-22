**Dictionaries:** are used to store data values in key:value pairs, using curly brackets around the pairs.  
Dictionaries are mutable, and any element can be a value in a dictionary.    

```py
myDict = {a: 1, b: 2, c: 3}  #returns {'a': 1, 'b': 2, 'c': 3}
newDict = {a: [1,2,3], b: {1: 'a', 2: 'b'}}  #returns {1: [1, 2, 3], 2: {1: 'a', 2: 'b'}}
```
**Methods:**  
clear()   Removes all elements from a dictionary  
copy()    Returns a copy of a dictionary  
dict()    Creates a dictionary object from given key-value pairs  
dict.fromkeys()  Returns a dictionary with the specified keys and values  
get()     Returns the value of the specified key  
items()   Returns a list containing a tuple for each key:value pair  
keys()    Returns a list containing the dictionary's keys  
len()     Returns the number of items in the dictionary  
pop()     Removes the element with the specified key  
popitem() Removes the last inserted key:value pair  
setdefault()  Returns the value of the specified key. If the key does not exist, this inserts the key with the specified value  
update()  Updates the dictionary with the specified key:value pair  
values()  Returns a list of all the values in the dictionary  

**You have to reference a key:value pair by its key:**  
You cannot use myDict[0], use myDict[key1] and the value for key1 is returned.  

**Add a value to a dict:**  
```py
myDict = {'a': 1, 'b': 2, 'c': 3}
myDict['f'] = 'new value'
print(myDict)  #returns {'a': 1, 'b': 2, 'c': 3, 'f': 'new value'}
```

**Dictionary comprehension:**  
```py
{x: x**2 for x in (2, 3, 4)}  #returns {2: 4, 3: 9, 4: 16}
```

**Convert keys-values into a dictionary:**  
```py
a = dict(a=1, b=2, c=3)
print(a)  #returns {'a': 1, 'b': 2, 'c': 3}
```