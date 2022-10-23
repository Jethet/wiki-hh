**Python loops**

**for loop:**  
```py
for x in myList:
  # do something
```

**match statement:**  
A match statement takes an expression and compares its value to successive patterns given as one or more case blocks. Example:
```py
def http_error(status):
  match status:
    case 400:
      return "bad request"
    case 404:
      return "not found"
    case 418:
      return "no idea"
    case _:
      return "something is wrong"
```

**range() function:**  
Instead of iterating from left to right over items in a string or list, the range() function can iterate over a sequence using *range(start, stop, step)*:
* start = value of start parameter (or 0 if no parameter is given)
* stop = the value of the stop parameter
* step = value of the step parameter (or 1 if no parameter is given)

When the user call range() with one argument, the user will get a series of numbers that **starts at 0** and includes every whole number up to, **but not including**, the number that the user has provided as the stop.
```py
for i in range(5)
  print i  #returns 0, 1, 2, 3, 4

list(range(5, 10))  #returns a list starting at 5 stopping at 10: range(start, stop)
list(range(0, 10, 3)) #list starts at 0, stops at 10 with steps of 3: [0, 3, 6, 9]
list(range(-10, -100, -30)) #list starts at -10, stops at -100 with steps of -30: [-10, -40, -70]

myList = ['who', 'is', 'there', 'now']
for x in range(len(myList)):
  print(x, myList[i])
#returns: 
# 0 who
# 1 is
# 2 there
# 3 now
```

**for loop dictionary:**  
You need to use two values in a for loop with a dict because of the key:value pairs.
```py
users = {
    'Quinn': 'active',
    'Éléonore': 'inactive',
    'John': 'active'
    }

for user, status in users.items():  #you need items() for a dictionary !!!
  if status == 'inactive':
    print(user)   #returns Éléonore
```

