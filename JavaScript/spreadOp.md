## Spread operator

The spread operator is a new JS feature that can be used with arrays and objects.

**Arrays**  
To combine arrays:
```js
const first = [1, 2, 3, 4]
const second = [6, 7, 8]
```
This can be done with concatenation: `const combinedArr = first.concat(second)`
In ES6 uses the spread operator: `const combinedArr = [...first, ...second]`

It is possible to add elements: `const combinedArr = [...first, "a", ...second, "b"]`  
This will put `a` in the middle and `b` at the end of the array

It makes it easy to clone an array: `const cloneFirst = [...first]`

---

**Objects**  
```js
const first = {name: "Anna"}
const second = {job: "Developer"}
```
To combine these two objects, you create a new object and grab all the properties by using the spread operator: `const combined = {...first, ...second}`  
Result: `{ name: 'Anna', job: 'Developer' }`  

It is possible to add properties: `const combined = {...first, ...second, stack: "MERN"}` 
To clone an object: `const cloneFirst = {...first}`

