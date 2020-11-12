# Code Conventions for JavaScript

JavaScript programs should be stored in and delivered as .js files.

JavaScript code should *not* be embedded in HTML files unless the code is specific to a  
single session. Code in HTML adds significantly to pageweight with no opportunity for  
mitigation by caching, minification, and compression.

## Whitespaces
Blank lines improve readability by setting off sections of code that are logically related.

Blank spaces  
* always a blank space after a keyword followed by ( such as if, else, wile
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
* The ternary operator can be visually confusing, so wrap the entire ternary expression  
in parenthesiss. The condition, the ? question mark, and the : colon always begins a  
line, indented 4 spaces:

![Example](/Users/henriettehettinga/GitHub/wiki-hh/Various/exampleTernary.png)
