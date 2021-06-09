// Function to sort an array of numbers
function sortNumbers(arr) {
  // Sort numbers from least to greatest:
  let sortArr = arr.sort(function(a, b){return a-b})
  return sortArr;
}

// Simple way to sort an array of numbers from least to greatest:
let sortArr = arr.sort((a, b) => a-b)

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN. Check these with:
if (value) {
  // do something
  }

// Dividing arrays: the Array instance splice() method:
const list = [1, 2, 3, 4, 5, 6]
const half = Math.ceil(list.length / 2);

const firstHalf = list.splice(0, half)
const secondHalf = list.splice(-half)


//Remove LAST char of string: (slice does not alter original array, create new)
const text = 'abcdef'
const editedText = text.slice(0, -1) //'abcde'

//Remove FIRST char of string:
const text = 'abcdef'
const editedText = text.slice(1) //'bcdef'

// SPLICE
// To delete an item in a database array called itemArray (a Node/Express server endpoint):
app.delete("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);

  const item = itemArray.find((item) => item.id === itemId);
  if (item) {
    const index = itemArray.findIndex((item) => item.itemId == itemId);
    itemArray.splice(index, 1);
    res.status(201).send({ success: true });
  } else {
    res.status(404).send("This item does not exist");
  }
});

// REDUCE method: this method is different than other array methods because it is doing
// some operations on the array and returns a combination of these operations
// Reduce works like a for loop; in the example, the FIRST variable is where the price is
// added for each iteration over the array. 'item' is used for the iteration. Then it takes a
// SECOND parameter that is the starting point for the operation: in this case, the operation 
// starts at 0 and adds the price to that.
const myItems = [
  {name: "book", price: 3},
  {name: "bike", price: 250},
  {name: "sweater", price: 15},
  {name: "coffee", price: 2},
  {name: "ticket", price: 8},
]
const total = myItems.reduce((currentTotal, item) => {
  return item.price + currentTotal
}, 0)
console.log(total);
