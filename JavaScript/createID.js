// Create id's for items with JavaScript:
if (data.items.length > 0) {
  ID = data.items[data.items.length - 1].id + 1;
} else {
  ID = 0;
}


// Alternative: function does not take any params, returns the next ID in the sequence
function getNextId() {
  // get highest id in the array; add 1 and return new id
  // new items are pushed at the end of the array; latest item has highest id
  // BUT because of zero-based counting, the first id is 0 and index is one less than total length of array
  const lastMessage = messages[messages.length - 1].id  
  const nextId = parseInt(lastMessage) + 1;
  return nextId.toString();
}

