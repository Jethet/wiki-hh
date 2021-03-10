## CSS grid

**Keywords**  
* Grid container: the element that holds the grid. This is the main building block of the CSS Grid
* Grid cell: a one by one unit on a grid
* Grid area: either a single cell or multiple cells that take the form of a square or rectangle (but not an L-shape)
* Grid tracks: the collection of rows and columns, defined using grid-template-columns and grid-template-rows properties (these will be defined automatically unless you create an *explicit grid*)
* Grid gaps: gaps between the cells in the grid. The size is 0 by default. You can not have contents on or within a grid gap.
* Explicit grid: defined by you using grid-template-columns and grid-template-rows
* Implicit grid: defined for you by the browser
* Line-based positioning: to place an item on the grid, we set the line on which it starts, then the line that we want it to end on

The **grid container** is the parent element: it is the starting point for displaying a grid on an element: `display: grid;`.  
When you make a container a grid with `display: grid;`, all of its direct children become grid items automatically.  

**Subgrid: in level 2 of CSS grid**  
Grids can be nested: any element (item) can have a grid.  

**Flexbox:** grid can be used with Flexbox.  

**Line-based positioning**  
The grid works with lines and these are numbered. To place an item on the grid, the line on which it starts, and the line that it  
ends on are defined. The horizontal line on top starts from 1 and counts up. The vertical line at the left also counts from 1 at  
the top horizontal line. The vertical line at the right, where the grid ends, counts with minus 
(-3, -2, -1) to the bottom  
horizontal line, which also counts back from the first vertical line (so that it ends with -1, the last 
number of the vertical line  
at the right). Example:  

![Gridlines](/wiki-images/gridExample.png)

**Styling**  
Whatever HTML element is **put onto the grid** exists in HTML: body, header, aside, paragraph, etc. These elements  
can be styled with CSS. The grid itself **cannot be styled** with CSS: it does not exist in the DOM. Only HTML and  
CSS exist in the DOM.



**Using space**  
Fixed units of measurements like px can be used in defining grids. CSS Grid layout also introduces a new unit of  
measurement called the **fr unit**. The fr unit represents a fraction of the available space in the grid container  
and can be used to create flexible grid tracks. Example:  
```
.container {
display: grid;
grid-template-columns: 2fr 1fr 1fr;
}
```  

Here, the available space is split into four parts: two parts will be assigned to the first track while the remaining  
two parts will be assigned one track each according to the available space left. This helps ensure consistency when  
building a grid. The `repeat()` notation also helps ensure consistency. It can be used to repeat all or part of a track  
listing:  
```
.container {
display: grid;
grid-template-columns: repeat(3, 1fr);
}
```

**Layout**  
Items in a grid container are children of that container and are laid out automatically with `auto-placement`. This means items  
are put in the rows that have been defined according to the available space. With `grid-auto-flow: column;` you can display  
the items in columns (also define grid-template-rows for the number of rows you want the columns to have).  
With `.container nth-child(*number*)` you can change the order of the children.  
