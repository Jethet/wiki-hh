# Differences between var, let and const

**Scope**  
A function scoped variable is available anywhere inside of the function it is declared in. Block scope means that a variable  
is available only in the block it is declared in (e.g. inside an if statement or a loop). The variable has local scope.  
When a variable is defined outside of a function and is not limited to any code block, it has global scope and can be accessible  
anywhere globally in the code. NB: variables and constants declared in a function take precedence over global 
variables or constants.  
Generally speaking, global variables should be avoided. Best practice is to primarily use `const`, and use `let` if the value needs to change.

**`var`**  
* function scope
* can be reassigned multiple times by redeclaring the variable with a new value
* risk of overriding the variable because it can be reassigned everywhere in the code
* can be used even if the var is created *after we use it* - this will give 'undefined' and not throw an error: var is hoisted to the top of the code

**`let`**  
* block scope
* cannot be redeclared in the same scope
* can be redeclared in another scope/block
* can be reassigned a new value
* not accessible if not declared first
* hoisted to the top of the block but not initialised: it cannot be used until it has been declared (even though the code is 'aware' that the let variable exists)

**`const`**  
* block scope
* cannot be redeclared
* cannot be reassigned
* if const is an object, it is allowed to change the properties

