## Flexbox

**Always check if you are working on a parent container or a child container**

#### Emmet embed function to create a container and children inside that container
* use `.container` to get a `div` tag with the class container
* use `>` to create children in the container
* again use a dot to give a class name, for example `.container>.items`
* every child element needs to have a unique number: use - $ * and a number: `.container>.items-$*5`
* this Emmet code will create a container with five numbered items in it.
* to give each item its own name, add .item: `.container>.items-$*5.item`


When **changing a row to a column**, you also need to change the direction of `justify-content` because this now refers to vertical  
alignment. Use `align-items:` for this.

**Order**: adding an order property to a flex item defines its order in the container without affecting surrounding items. Its default  
value is 0, and increasing or decreasing it from there moves the item to the right or left, respectively. This can be used, for example,  
to swap order of the .first-item and .last-item elements in a grid. 
