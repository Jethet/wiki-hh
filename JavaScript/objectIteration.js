// iterate over an object with value of array of objects (.json file)

let myObject = {
  users: [
    {
      name: "myName",
      email: "myemail@email.com",
    },
    {
      name: "yourName",
      email: "youremail@email.com",
    },
    {
      name: "theirName",
      email: "theiremail.com",
    },
  ],
};

let firstThis = Object.entries(myObject);
console.log("This is first:", firstThis);
// RESULT: This is first: [ [ 'users', [ [Object], [Object], [Object] ] ] ]

/* The Object.entries() is a method that was introduced in ES8 and can be used
   for traversing an object. Unlike Object.values() that creates an array of the
   values in the object, Object.entries() produces an array of arrays: 
   [ [x, 1], [y, 2], [z, 4] ]
   Each inner array has two elements. The first element is the property, the
   second element is the value.
*/

let secondThis = Object.entries(myObject.users);
console.log("This is second", secondThis);
/* RESULT:
    [
      [ '0', { name: 'myName', email: 'myemail@email.com' } ],
      [ '1', { name: 'yourName', email: 'youremail@email.com' } ],
      [ '2', { name: 'theirName', email: 'theiremail.com' } ]
    ]
*/

console.log(secondThis[0]);
// RESULT: [ '0', { name: 'myName', email: 'myemail@email.com' } ]

secondThis.forEach((item) => {
  console.log("These are the items", item);
});
/* RESULT:
    These are the items [ '0', { name: 'myName', email: 'myemail@email.com' } ]
    These are the items [ '1', { name: 'yourName', email: 'youremail@email.com' } ]
    These are the items [ '2', { name: 'theirName', email: 'theiremail.com' } ]
*/

Object.entries(myObject.users).forEach((item) => {
  console.log("These are the items", item);
});
/* RESULT:
    These are the items [ '0', { name: 'myName', email: 'myemail@email.com' } ]
    These are the items [ '1', { name: 'yourName', email: 'youremail@email.com' } ]
    These are the items [ '2', { name: 'theirName', email: 'theiremail.com' } ]
*/

