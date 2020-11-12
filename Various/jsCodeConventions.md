# Code Conventions for JavaScript
information from https://www.crockford.com/code.html by Douglas Crackford

JavaScript programs should be stored in and delivered as .js files.

JavaScript code should *not* be embedded in HTML files unless the code is specific to a  
single session. Code in HTML adds significantly to pageweight with no opportunity for  
mitigation by caching, minification, and compression.

All variables should be declared before used. Use of global variables should be minimized.

## Whitespaces
Blank lines improve readability by setting off sections of code that are logically related.

Blank spaces  
* always a blank space after a keyword followed by ( such as if, while
* blank space should **not** be used between a function value and its invoking (
* the word function is always followed by one space
* every comma should be followed by a space or a line break
* every semicolon at the end of a statement should be followed by a line break
* every semicolon in the control part of a for statement should be followed by a space

## Indentation
* every statement should begin aligned with the current indentation
* the outermost indentation level is at the left margin
* the indentation increases by 4 spaces when the last token on the previous line is:  
 { left brace, [ left bracket, ( left paren. The matching closing token will be the  
 first token on a line, restoring the previous indentation.
* the ternary operator can be visually confusing, so wrap the entire ternary expression  
in parenthesiss. The condition, the ? question mark, and the : colon always begins a  
line, indented 4 spaces:

![Example](https://github.com/Jethet/wiki-hh/blob/main/Various/exampleTernary.png)

* clauses (case, catch, default, else, finally) are not statements and so should not  
be indented like statements

## Comments
* make comments meaningful and focus on what is not immediately visible
* use line comments, not block comments, and start at the left margin

## Function declarations
* all functions should be declared before they are used
* inner functions should come after the outer function's variable declarations (this  
helps make it clear what variables are included in its scope).
* no space between the name of a function and the (  of its parameter list
* one space between the ) and the {  that begins the statement body
* the body itself is indented four spaces
* the } is aligned with the line containing the beginning of the function declaration
* when a function is to be invoked immediately, the entire invocation expression should  
be wrapped in parens so that it is clear that the value being produced is the result of  
the function, and not the function itself

## Names
* names should be formed from the 26 upper and lower case letters (A .. Z, a .. z), the  
10 digits (0 .. 9), and _ (underscore). Do not use $ dollar sign or \ backslash in names.
* do not use _  as the first or last character of a name
* most variables and functions should start with a lower case letter
* constructor functions that must be used with the new prefix should start with a  
capital letter
* global variables should be avoided, but when used should be in ALL_CAPS.