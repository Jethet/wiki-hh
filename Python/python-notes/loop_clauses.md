**Python control flows: loop clauses**  

Statements and clauses that can be used in loops:
* break
* continue
* else
* pass => this will not do anything: you can define a function or class with pass and nothing will happen when you call it

Example break statement: find prime numbers in a range from 2 to 10 (not inclusive!)  
```py
for n in range(2, 10): #equivalent of...for n in [2,3,4,5,6,7,8,9]:
    for x in range(2, n): #first loop is for x in range(2, 2):
        if n % x == 0: 
            print(n, 'equals', x, '*', n//x)
            break
    #the else runs when no break clause occurs
    else:
        print(n, 'is a prime number')
```
This returns:  
2 is a prime number  
3 is a prime number  
4 equals 2 * 2  
5 is a prime number  
6 equals 2 * 3  
7 is a prime number  
8 equals 2 * 4  
9 equals 3 * 3  

Example continue statement:
```py
for num in range(2, 10):
  if num % 2 == 0:
    print("Found an even number: ", num)
    continue
print("Found an odd number: ", num)
```
Returns:  
Found an even number: 2  
Found an odd number:  3  
Found an even number: 4  
Found an odd number:  5  
Found an even number: 6  
Found an odd number:  7  
Found an even number: 8  
Found an odd number:  9  
