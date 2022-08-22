**Classes in Python**  

Classes provide a means of bundling data and functionality together. Creating a 
new class creates a new type of object, allowing new instances of that type to be 
made.

The class inheritance mechanism allows multiple base classes. A derived class 
can override any methods of its base class or classes, and a method can call 
the method of a base class with the same name.

The simplest form of class definition looks like this:
```py
class ClassName:
    <statement-1>
    .
    .
    <statement-N>
```
Class definitions, like function definitions (def statements) must be executed 
before they have any effect.
```py
class MyClass:
    """A simple example class"""
    i = 12345
    
    def f(self):
        return 'hello world'

MyClass.i # return the int
MyClass.f # returns a function object
MyClass.__doc__ # magic method/dunder method that return the text literal

x = MyClass() #instantiates the class
x.i # return the int
x.f() # calls the class method
```

**Add or delete an attribute**  
Add a data attribute and assign a value:  
```py
x.counter = 1
while x.counter < 10:
  x.counter = x.counter * 2

print(x.counter)  #returns 16 as last value: it is bigger than 10 so the loop stops

del x.counter  #this removes the attribute completely
```

**Class and instance variables**  
```py
class Dog:
    kind = 'canine' # class variable shared by all instances

    def __init__(self, name):
        self.name = name  # instance variable unique to each instance
        
    def add_trick(self, trick):
        self.tricks.append(trick)  #this is appended to the instance, NOT the class

d = Dog('Fido')
e = Dog('Buddy')
d.kind  #returns canine
e.kind  #returns canine
d.name  #returns Fido
e.name  #returns Buddy
d.add_trick('roll over')
e.add_trick('play dead')
d.tricks #returns only 'roll over' because that is assigned to d, nothing else
```

**Inheritance**  
A base class can be added when a class object is constructed, example:  
```py
class Dog(AnimalClass):
    kind = 'canine' # class variable shared by all instances
```
If a requested attribute is not found in the class, the search will look into the base class for that attribute. The derived class can extend or override the base class methods.

