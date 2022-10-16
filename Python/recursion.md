# Recursion

* Recursion is the process of a function calling itself directly or indirectly.
* This is a way to get to the solution of a problem by braking it into smaller and simpler steps.
* The function needs a **base condition** that needs to be satisfied before the next iteration can occur.
* If the base condition is satisfied, the function **stops calling itself** because the elementary step of the function is reached.
* Recursion is necessary for code where previous values are needed to execute the entire function, like generating a fibonacci series.
* Limitations are memory requirements, time consumption, debugging/clear code.

Example:
```py
def sum(n):
    if(n ==0):
        return 0
    return n + sum(n-1)

print(sum(5))   # will return 15
```

