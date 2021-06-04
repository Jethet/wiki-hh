// Create id's for items with JavaScript:

if (data.items.length > 0) {
  ID = data.items[data.items.length - 1].id + 1;
} else {
  ID = 0;
}


// Alternative:
// returns the next ID in the sequence
function getNextAlbumId() {
  // find the current highest ID ( we can assume the last one is the highest)
  const highestId = albumsData[albumsData.length-1].albumId
  // add 1 to it (we need to convert it to a number first - try it out!)
  const nextId = parseInt(highestId) + 1
  // return it as a string
  return nextId.toString()
}