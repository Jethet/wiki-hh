## CSS grid

**Keywords**  
* Grid container: the box that holds the grid. This is the main building block of the CSS Grid
* Grid cell: a one by one unit on a grid
* Grid area: either a single cell or multiple cells that take the form of a square or rectangle (but not an L-shape)
* Grid tracks: the collection of rows and columns, defined using grid-template-columns and grid-template-rows properties
* Grid gaps: help to create spaces on the grid. You can not have contents on or within a grid gap.
* Explicit grid: defined by you using grid-template-columns and grid-template-rows
* Implicit grid: defined for you by the browser

The **grid container** is the starting point for displaying a grid on an element: `display: grid;`.  
When you make a container a grid with `display: grid;`, all of its direct children become grid items automatically.  

**Using space**  
Fixed units of measurements like px can be used in defining grids. CSS Grid layout also introduces a new unit of  
measurement called the **fr unit**. The fr unit represents a fraction of the available space in the grid container  
and can be used to create flexible grid tracks. Example:  
```
.container {
display: grid;
grid-template-columns: 2fr 1fr 1fr;
} ```  

Here, the available space is split into four parts: two parts will be assigned to the first track while the remaining  
two parts will be assigned one track each according to the available space left. This helps ensure consistency when  
building a grid. The `repeat()` notation also helps ensure consistency. It can be used to repeat all or part of a track  
listing:  
```
.container {
display: grid;
grid-template-columns: repeat(3, 1fr);
} ```

**Layout**  
Items in a grid container are children of that container and are laid out automatically with `auto-placement`. This means  
items are put in the rows that have been defined according to the available space.  
With `grid-auto-flow: column;` you can display the items in columns (also define grid-template-rows for the number  
of rows you want the columns to have). With `.container nth-child(*number*)` you can change the order.  
