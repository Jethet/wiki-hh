// Create id's for items with JavaScript:
if (data.items.length > 0) {
  ID = data.items[data.items.length - 1].id + 1;
} else {
  ID = 0;
}


// Alternative:
// returns the next ID in the sequence
function getNextId() {
  const lastMessage = messages[messages.length - 1].id  
  const nextId = parseInt(lastMessage) + 1;
  return nextId.toString();
}

