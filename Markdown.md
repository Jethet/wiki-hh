## Basic Markdown

**Markdown in VSC:**  
You can open a Markdown file and work with it in VSC. To switch between views, press `⇧⌘V `in the editor. You can view the preview side-by-side (⌘K V) with the file you are editing and see changes reflected in real-time as you edit.

* non-breaking spaces that can serve as indent: macOS **Alt plus space**
* 'hard' line break: add two spaces and return
* italic text is surrounded by * or _
* bold text is surrounded by ** or __  
(You can combine them)

* header tags go from # for h1 to 6 x # for h6 (space after #):

# This is an h1 tag
## This is an h2 tag
### This is an h3 tag
#### This is an h4 tag
##### This is an h5 tag
###### This is an h6 tag
------

**Unordered list:**  
Use * plus space before each item, at any level:
* Item 1
* Item 2
  * Item 2a
  * Item 2b

**Ordered list:**  
Use 1. plus space before each item, at any level:
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b

**Images:**  
`![GitHub Logo](/images/logo.png)`
Format: `![Alt Text](url)`  *no backticks*

**Links:**  
`[GitHub](http://github.com)`  *no backticks*  
You can also add an optional title attribute to your links:  
`[This is the website](http://github.com)`  *no backticks*  
NB: make sure you start on a new line (add two spaces and return if you have a line of text before the link).

GitHub has its own version of Markdown with extra features, for example  
any regular URL will automatically be converted to a clickable link:  
https://guides.github.com/features/mastering-markdown/

To emphasize links, add asterisks before and after the brackets and parentheses.  
To denote links as code, add backticks in the brackets.

**Urls and email:**  
To quickly turn a URL or email address into a link, enclose it in angle  
brackets < >.

**Blockquotes**:  
Put > before each quote line:

As the politician said:

> We're living the future so
> the present is our past.

Blockquotes can be nested. Add a >> in front of the paragraph you want to nest.

**Inline code:**  
Use backticks around the code: 'I think you should use an addr element here' will become:  'I think you should use an `<addr>` element here'.

**Blocks of code:**  
Use three backticks (```) at the start and the end of the code:  
```
const myLogger = (req, res, next) => {
  const visitTime = new Date()
  console.log(`Visited ${req.url} at ${visitTime.toLocaleString()}`);
  next()
}

app.use(myLogger)
```

**Syntax highlighting for code:**  
You can add an optional language identifier to enable syntax highlighting in your fenced code block. Add the language after the first three backticks (``` javascript):

``` javascript
const myLogger = (req, res, next) => {
  const visitTime = new Date()
  console.log(`Visited ${req.url} at ${visitTime.toLocaleString()}`);
  next()
}

app.use(myLogger)
```

**Horizontal Rule**  
To create a horizontal rule, use three or more asterisks (***), dashes (---),  
or underscores (___) on a line by themselves. They all create a horizontal line.  

-----

**Tables**  
Markdown tables are physically represented using dash `-` for to separate the header  
row from the content ones and pipe `|` for columns. Example:  
Column | Column
------ | ------
Cell   | Cell    

`:` is used to align a column. Left align is the standard.

Column | Column | Column
:----- | :----: | -----:
Left   | Center | Right
align  | align  | align

NB: Markdown ignores spacing. If you need a void column you must add a space between the pipes.  
