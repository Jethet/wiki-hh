## HTML learning

### Various
* set up a new HTML file with shortcut **! + tab** (HTML boilerplate)
* for comments that should be ignored in HTML code, use a special tag to add notes that will be ignored:
    ``` html
    <!-- Note to self: xxx xxx -->
    ```
* meta data is not rendered but used by the server (for example: description and
  keywords are giving information that will be used by Google)

* Attributes: `key="value"` syntax, such as `class=""`, `id=""`, `src=""`, `style=""`. An id is unique in the context of a web page and cannot be duplicated. A class can appear multiple times and hold multiple values. NB: React sometimes uses a different syntax.

* `defer src` is used for faster path to a fast-loading page.


### Webpage structure
* a doctype needs to be defined first in an HTML page: it tells the browser which version of HTML the page is using. The code is:
  ``` html
  <!DOCTYPE html>
  <html>
    <head></head>
    <body></body>
  </html>
  ```
* head and body tags: an HTML page is split into two parts, head and body. The head contains important webpage information (title, stylesheet, script, font etc.). The head is the name of the website for search engines. The body contains the webpage content that is visible to the user. The code is:  
  ``` html
  <head>
    <title>THIS IS THE TITLE</title>
  </head>
  <body>
  </body>
  ```
* footer: whatever is coded between the `<footer></footer>` tags will be repeated for each page

#### HEAD:
* In the head, the links to the main css stylesheet (style.css) should come under the title: 
  ``` html
  <link rel="stylesheet" href="file.css">
  ```  
* The style.css link should be the last one you add. To start with a good layout without default values, you can include
  ``` html
  <link rel="stylesheet" href="reset.css">
  ```
* All other (external) stylesheet links are placed above the `<title>` line.

* With the `<style>` tag, a style can be added without loading an external stylesheet: `<style>.some-css {}</style>` (with media attribute this can be applied only for a specified medium, for example 
  ``` html
  <style media="print">.class-name {margin: 10px}</style>
  ```
* The media attribute allows loading different stylesheets depending on the device capabilities:
  ``` html
    <link href="file.css" media="screen" rel="stylesheet">
    <link href="file.css" media="print" rel="stylesheet">
  ```
* Other resources than stylesheets can be added, for example RSS feed:  
  ``` html
  <link rel="alternate" type="application/rss+xml" href="file.css"> 
  <link rel="icon" sizes="180X180" href="/assets/apple-touch-icon.png">
  ```

* With the base tag, a base URL is set for all relative URLs contained in the page, for example for favicon icons that are used:
  ``` html
  <base href="https://favicon.com/">
  ```  

* **Meta tag:** The meta tag is very important, especially for SEO. A meta element has the starting tag `<` and ends with `>`. The basic meta tag is the description that could be used by search engines to describe the page: 
  ``` html
  <meta name="description" content="Full explanation of healthy food">
  ```
* With the **charset** tag the page character encoding is set, usally utf-8: 
  ``` html
  <meta charset="utf-8">
  ```
* With the **robots** tag the SEO bots are instructed to index a page: 
  ``` html
  <meta name="robots" content="noindex">
  ```
 * or if they should follow links:
  ``` html
  <meta name="robots" content="nofollow">
  ```
 * A combination is possible: 
  ``` html
  <meta name="robots" content="noindex, nofollow">
  ```
* With **viewport** tag the browser is told to set the page width based on the device width: 
  ``` html
  <meta name="viewport" content="width=device-width, initial-scale=1">
  ```
* With 
  ``` html
  <meta http-equiv="refresh" content="3;url=http://flavicon.com/anotherpage">
  ```
as meta tag, the browser is told to **wait** 3 seconds before directing to the other page.

#### BODY:
There is only one body tag on a page (just like only one head and htlm tag). There are two general categories of elements in the body:  
* **block elements:** `<p>`, `<div>`, heading elements, lists and list items, etc. Block elements do not allow other elements on either side of them. Width/height, margin, padding and borders of block elements can be altered. A block element can contain an inline element or another block element.
* **inline elements:** `<a>`, `<span>`, `<img>`, etc. Inline elements can sit next to other inline elements. Width, margin etc. cannot
be altered for inline elements. Inline elements cannot contain a block element.

#### HEADER
The header tag represents the part that is the introduction. It usually contains a heading tag, a tagline for an article or  
image, etc. Code: `<header></header>`

#### MAIN
The main tag represents the main part of a page. Code: `<main></main>`

#### FOOTER
The footer tag is used to determine the footer of an article or page. Code: `<footer></footer>`

### ELEMENTS
Elements have an opening and a closing tag, plus content. All the following are elements.

**heading**  
There are 6 sizes for headings. The code is: `<h1></h1>` (usually only 1 per page: the page title), `<h2></h2>` etc.  
`<h1>` defines the largest (= most important) heading and `<h6>` the smallest. The headings should be used for hierarchy in importance of sections. They should not be used because of size (a heading size can be determined with CSS). SEO engines recognise headings. Headings are block elements and cannot contain other elements.

**paragraph**  
Use `<p>` to put content into paragraphs. It will break up your text and make it easier to read for the user. Code  
(after code for header): `<p></p>` This is a block element. Inside it, an inline element can be added. No block element  
can be added and no p element can be nested inside a `<p>`. By default, browsers style a paragraph with a margin on top  
and bottom, adding space between two consecutive paragraphs like paragraph in text.

**span**  
`<span></span>` is an inline tag that can be used to create a section in a paragraph that can be targeted using CSS.

**break**  
`<br>` can be used to create a new line inside a p tag, without additional spacing. `<br>` is an inline element.

**div** (= division element)  
The div is a general purpose container for other elements, to be used anywhere a container is needed but where an existing  
tag is not suited. A div tag groups elements together. This is useful for styling (e.g. giving the grouped elements the same  
colour). Code to wrap around elements: `<div></div>`

**article** (semantic element)  
The article tag identifies self-contained and independent content in a page and can be reused independently, such as blog posts  
or newspaper articles. Code: `<article></article>`

**section** (semantic element)  
A section element defines a section in a document: `<section></section>`. It is useful to break a long article into different  
sections, for example. NOTE: sections can have articles and articles can have sections; no precedence.

**nav**  
This tag is used to create the markup that defines the page navigation. It is typically used with a ul or ol list. Code: `<nav></nav>`

**aside**  
The aside tag is used to add content that is related to the main content, for example a box to add a quote, or a sidebar. Aside  
indicates that the things it contains are not part of the regular flow of the section in which aside is present. Code: `<aside></aside>`

**lists**  
`<ul>`: unordered list with bullets, and `<ol>`: ordered list with numbers before each item. ul and ol are used with list items `<li>`.  
The code example is:
  ``` html
  <ol>
    <li>item 1</li>
    <li>item 2</li>
    <li>etc...</li>
  </ol>
  ```

`<pre></pre>` all that is within these tags is respected: in this way empty lines can be created, for example.

**image**  
There should always be a folder for images in the project folder. The images can be downloaded by right clicking  
on a link and select 'Save as ...', and save the images to the image folder.  
Images have three primary attributes:  
* the `<img>` tag
* the src attribute that lets the page know what image the user wants to see
* the alt attribute that provides extra information if the image cannot be seen on the webpage for any reason
To see the image on the webpage, the image needs to be linked by telling the webpage where the image is and what  
it is called. Code:  
``` html
<div>
  <img src="images/logo.png" alt="codebar.io">
</div>
```

It is possible to link to a video and combine this with pictures. First the link to the video should be added (with code  
`<a href="">`) and images of pictures can be added under this (small indent).

#### TAGS
`<strong>`:  
The strong tag is used to mark the text inside it as strong. It is not a visual hint but a semantic hint. Its interpretation will  
vary depending on the medium but by default browsers make the text in this tag 'bold' but it is meant to indicate importance, not  
styling as with `<b>`.

`<em>`:  
The em tag marks the text inside it as emphasised. Browsers by default make this text italic. Also indicates importance, not styling  
as with `<i>`.

Other tags | Used for 
---------- | :-------
`<small>` | makes the font smaller (size of subscript)
`<mark>` | puts the text in highlight
`<ins>` | makes text look as if inserted by underlining it
`<del>` | makes text look deleted by crossing it out
`<sup>` | puts text as superscript
`<sub>` | puts text as subscript
`<i>` | makes text italic
`<b>` | makes text bold

* `<blockquote>`: The blockquote tag is used to insert citations in the text. By default, browsers apply a margin to the blockquote text.

* `<q>` The q tag is used for inline quotes.

* `<hr>` adds a horizontal line in the page
________________________________________________________________________________

#### LINKS
Links are defined by using the `<a>` tag and the link destination is set with the href attribute. It is an anchor  
tag that contains the URL address of the link: it is used to indicate where the user should go:  
`<a href="https://..url and page of website..">..description reference..</a>`

* **regular link:** `<a href="https://codebar.io">Click here</a>` (this is an absolute URL).  
Links also work with relative URLs by using / in the href. Links can include text, images or any other element but  
not other links. Example image: 
``` html
<a href="https://codebar.io">
  <img src="test.jpg">
</a>
```
* **mailto link:** a link can open up a user's email client and share content. The difference  between regular links  
and mailto links is the content defined in the href attribute. Code:  
`<a href="mailto:social&codebar.io?subject=I%20love%20owls%20::%20codebar">Email us</a>`  
Note: spaces in the subject text are replaced by %20.

* **Link to top:** a link to the top of the webpage can be added by using `<a href="#">Jump to top</a>`

* **target** is an anchor tag attribute that specifies where to open the link and the value "_blank" specifies to  
open the link in a new tab: `<a target="_blank" href="http://freecodecamp.org">Freecodecamp.org</a>`


#### FORMS
Forms are used to interact with a page or app. When a form is submitted, data
is sent to the server by the browser. This causes the page to reload (can be
changed using JavaScript). Code: `<form></form>`
By default, forms are submitted using GET HTTP. Using POST is preferable in
most cases. This can be changed using the attribute: method. Code:
`<form method="POST">  ... </form>`

The form is submitted to the same URL where it resides. The server needs to
handle the request and must 'listen' for form submit events on a dedicated URL.
The URL can be specified via the parameter: action. Code:
`<form action="/example" method="POST"> ..... </form>`
The browser will submit the form data using POST to the /example URL on the
same origin.

**Data provided through forms**  
* **input:** this is one of the most widely used form elements, very flexible,
       it can change behaviour based on the attribute: type. Default is
       single-line text input: `<input>` (is the same as: `<input type="text">`)
       All fields need to have a field name: `<input type="text" name="username">`
       Attribute 'placeholder' makes text show p in an empty field as a hint
       for the user: `<input type="text" name="username" placeholder="Username">`

* **email:** to validate an email for semantic correctness, use:
       `<input type="email" name="email" placeholder="Your email">`

* **password:** every key entered will appear as an asterisk (*) or dot (.) by using:
          `<input type="password" name="password" placeholder="Your password">`

* **numbers:** with type="number" the input element will only accept numbers:
        `<input type="number" name="age" placeholder="Your age">`
         To specify a minimum and maximum, use: min="18" max="110"
         Use step="x" to accept a value between different values in steps of 'x'.

* **hidden field:** fields can be hidden from the user but will still be sent to the
       server upon form submit, for example to store values like a CSRF token:
       `<input type="hidden" name="some-hidden-field" value="some-value">`

All these fields accept a predefined value that will be sent to the server if
the user does not change the value, for example default age is 18:
  `<input type="number" name="age" value="18">`
A placeholder can be set and will appear if the user clears the input field value:
  `<input type="number" name="age" placeholder="Your age" value="18">`

* **submit**: this is a button that can be pressed by the user to submit the form:
        `<input type="submit">`
        A value attribute can be used to use a different text than 'submit':
        `<input type="submit" value="Click here">`

Set fields as required:
The required attribute helps with validation. If the field is not set, client-side
validation fails and the browser does not submit the form:
    `<input type="text" name="username" required>`

Set specific format:
With the pattern attribute a specific format can be enforced on any field. The
pattern attribute gives the ability to set a regular expression to validate the
value against:  `<input type="text" name="username" pattern="[a-zA-Z]{8}">`
(see documentation on regular expressions).

File uploads:
Load files from local computer and send them to the server using type="file":
  <input type="file" name="example-name">
This goes for multiple files:
  <input type="file" name="examples-names" multiple>
File types that are allowed can be specified with attribute: accept
  <input type="file" name="examples-names" accept="image/*">
You can use a MIME type or set a file extension:
  <input type="file" name="examples-names" accept=".jpg, .jpeg, .png">

___

#### Buttons
The input field <type="button"> can be used to add additional buttons to the form
that are not submit buttons:  <input type="button" value="Click here">
When the button is clicked, something happens (programmed using JavaScript).

reset button: there is a special action to clear the form and bring back the
              default fields:  <input type="reset">

Radio buttons create a set of choices, of which one is pressed
              and then all others are disabled (name comes from old car radios).
              The set is defined with same name but different value attributes:
                <input type="radio" name="colour" value="yellow">
                <input type="radio" name="colour" value="red">
                <input type="radio" name="colour" value="blue">
              It is possible to set a pre-selected value (only once per set),
              using the attribute: checked.

checkbox: similar to radio buttons but allow multiple values to be chosen (or
none at all). type="checkbox", by default all unchecked. Forms commonly use
checkboxes for questions that may have more than one answer. Checkboxes are a
type of input. Each of the checkboxes can be nested within its own label element.
By wrapping an input element inside of a label element it will automatically
associate the checkbox input with the label element surrounding it. All related
checkbox inputs should have the same name attribute.

It is considered best practice to explicitly define the relationship between
a checkbox input and its corresponding label by setting the for attribute on
the label element to match the id attribute of the associated input element.

Date and time:
type="date"  - allows user to enter a date and shows a date picker if needed
type="time"  - allows user to enter a time and shows a date picker if needed
type="month" - allows user to enter a month and a year
type="week"  - allows user to enter a week and a year
type="datetime-local" field lets the user choose a date and a time.

**Colour picker:**  
With the element type="color" the user can be asked to pick a colour. The browser
will take care of showing a colour picker to the user. A default value can also
be set:  
``` html
<input type="color" name="example-colour" value="#000000">
```
**Range:**  
The range input element shows a slider and the user can move it from a starting
value to an ending value, if required also with an optional step:
``` html
    <input type="range" name="age" min="0" max="100" value="30" step="10">
```

**Telephone:**  
Input field to enter a phone number; can show a numeric keyboard on a mobile.
With pattern an additional validation can be specified:  
``` html
    <input type="tel" pattern="[0-9]{3}-[0-9]{8}" name="telephone-number">
```

**URL:**  
Input field to enter a URL; with the `pattern` attribute, validation can be specified:
``` html
    <input type="url" name="website" pattern="https://.*">
```

Multi-line text: **textarea**  
With the textarea element users can enter multi-line text. This requires an ending tag:  `<textarea></textarea> ` 
CSS can be used for sizing, or attributes rows and columns: 
``` html
<textarea rows="20" cols="10"></textarea>
```
The `cols="number"` specifies the width of the text area (in average character width). Default value is 20, default font is Courier.  
A name is always required to reference the form data after the form is submitted (if you omit the name attribute, no data from the  
text area will be submitted).  

Drop-down menu: **select**  
The select tag creates a drop-down menu and the user can choose one of the options available. The options are created with   
`<option></option>`:
``` html
   <select name="colour">
      <option value="red">Red</option>
      <option value="yellow">Yellow</option>
   </select>
```
Set an option disabled: `<option value="red" disabled>Red</option>`  
Set an option empty:    `<option value="">None</option>`  

Options can be grouped with <optgroup></optgroup>. An option group has a label attribute:
``` html
    <select name="colour">
      <optgroup label="Primary">
         <option value="red">Red</option>
         <option value="yellow">Yellow</option>
      </optgroup>
      <optgroup label="Other">
        <option value="pink">Pink</option>
        <option value="purple">Purple</option>
      </optgroup>
    </select>
```
*It is considered best practice to set a for attribute on the label element, with a value that matches the value of the id attribute of the input element. This allows assistive technologies to create a linked relationship between the label and the child input element.*

---

**TABLES**  
Data in a table is defined in terms of rows, not columns. The columns are defined inside a row. The first row can take the role of the header, if needed.

A table must have a `<caption></caption>` tag that describes the content. This tag comes immediately after the  
opening `<table>` tag. The table header contains the name of a column, typically in bold font. 

The header can be defined using: `<th></th>`  
A row is added by using:   `<tr></tr>`  
The content is defined using: `<td></td>`  

Example of a table with 3 rows with content, and 3 columns defined in the first row:
``` html
  <table>
    <thead>
      <tr>
        <th>Column 1</th>
        <th>Column 2</th>
        <th>Column 3</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td>Row 1 column 1</td>
      <td>Row 1 column 2</td>
      <td>Row 1 column 3</td>
    </tr>
    <tr>
      <td>Row 2 column 1</td>
      <td>Row 2 column 2</td>
      <td>Row 2 column 3</td>
    </tr>
    </tbody>
  </table>
```
(adding CSS padding and border for `th` and `td` makes the table look more like a proper table).  

To get a row heading or an empty first column heading above the rows, use `<th></th>` in the heading `<tr></tr>`.  
In the example, this would give:
``` html
  <tr>
    <th></th>
    <th>Column 1</th>
    <th>Column 2</th>
  </tr>
```
**Span:**  
A row can span over 2 or more columns using `colspan`:  
``` html
   <tr>
      <td colspan="2">Row 1 Columns 1-2</td>
   </tr>
   ```
A row can span over 2 or more rows using `rowspan`:
``` html
   <tr>
      <td colspan="2">Row 1 Columns 1-2</td>
   </tr>
```
For big tables there are 3 tags to organise the table to wrap <tr>'s to define the different sections:  
`<thead></thead>`   (header)  
`<tbody></tbody>`   (body)  
`<tfoot></tfoot>`   (footer)  

---

### Multimedia tags - audio and video

**Audio:**  
* The `<audio>` tag enables embedding audio content in an HTML page. It can play an audio source using the src attribute:   
``` html
 <audio src="file.mp3">
```
* Show the built-in controls with controls attribute: 
``` html
 <audio src="file.mp3" controls>
```
* To set the audio file to play automatically, use autoplay:
``` html
 <audio src="file.mp3" controls autoplay>
```
* With loop the audio restarts:
``` html
 <audio src="file.mp3" controls autoplay loop>
```
If loop is not used, the audio stops at the end of the file.

**Video:**  
The `<video>` tag enables embedding video content in an HTML page, for example with the src attribute:
``` html
 <video src="file.mp4">
```
* The same tags as for audio apply (controls, autoplay, loop). It is possible to set an image as poster image:
``` html
 <video src="file.mp4" poster="picture.png">
```
* Without poster the browser will show the first frame of the video as soon as it is available. With width and height attributes the space for the element can be specified so that the browser does not change the layout.

**Iframes:**  
* Content from other websites can be embedded in a web page using the `iframe` tag. An iframe creates a new nested browsing context that does not interfere with the parent page (and vice versa). It can be used to do something in one part of the page (coding, for example) and see the result in a box. Code for simple iframe:
``` html
<iframe src="page.html"></iframe>
```
* It is possible to lead an absolute URL: 
``` html
<iframe src="https://site.com/page.html">
</iframe>
```
* Set width/height parameters: 
``` html
<iframe src="page.html" width="xx" height="xx"></iframe>
```
(or with CSS).

**Srcdoc:**  
The `srcdoc` attribute specifies the HTML content of the page to show in the inline frame. If a browser supports the  
`srcdoc` attribute, it will override the content specified in the `src` attribute (if present). If a browser does not  
support the `srcdoc` attribute, it will show the file specified in the `src` attribute instead.

**Sandbox:**  
The sandbox attribute can limit operations allowed in iframes by adding options:
``` html
<iframe src="page.html" sandbox="allow-forms"></iframe>
```
There are options such as `""` (nothing is allowed), `allow-modals`, `allow-popups`, `allow-scripts`, `allow-top-navigation` and others.

**Referrer:**  
When loading an iframe, the browser sends important information in the Referer
header (NOTE: misspelt by tradition). This is a header that lets the page know
who is loading it. The referrerpolicy attribute has the following allowed values:
no-referrer-when-downgrade: default setting; does not send the referrer when the
                            current page is loaded over HTTPS while the iframe
                            loads over the HTTP protocol
no-referrer: does not send the referrer header
origin: the referrer is sent and only contains the origin (port, protocol,
        domain), not the origin + path which is the default
origin-when-cross-origin: when loading from same origin in iframe, the referrer
                          is sent in its complete form (origin + path)
same-origin: the referrer is sent only when loading from same origin (port,
             protocol, domain) in the iframe
strict-origin: sends the origin as the referrer if the current page is loaded
               over HTTPS and the iframe also loads over the HTTPS protocol.
               Sends nothing if the iframe is loaded over the HTTP protocol.
strict-origin-when-cross-origin: sends the origin + path as the referrer when
                                 working on the same origin. Sends the origin
                                 as the referrer if the current page is loaded
                                 over HTTPS and the iframe also loads on HTTPS.
                                 Sends nothing if the iframe is loaded over
                                 HTTP.
unsafe-url: sends the origin + path as the referrer even when loading resources
            form HTTP and the current page is loaded over HTTPS.

IMAGES
Images can be displayed using the img tag, which accepts a src attribute to set
the image source. An alt attribute is required to describe the image for screen
readers or search engines: <img src="example.png" alt="A picture of an example">
With width and height attributes the space of the element is set, so that the
browser does not change the layout when it is fully loaded. Use numeric values
in pixels:
<img src="example.png" alt="A picture of an example" width="300" height="200">

figure:
The figure tag is often used for captions with an image. The text is wrapped by
the figcaption tag:
<figure>
  <img src="example.png" alt="A picture of an example">
  <figcaption>A nice example</figcaption>
</figure>

responsive images: srcset
With srcset responsive images can be set that the browser can use depending on
pixel density or window width. The browser can only download the resources it
needs to render the page (for example, not a big image for a mobile phone).
Example of 4 images for 4 screen sizes:
  <img src="example.png" alt="A picture of an example"
      srcset="example-500.png" 500w, example-800.png 800w,
      example 1000.png 1000w, example-1400.png 1400w">
When using w for window width, the sizes attribute must be used as well:
  <img src="example.png" alt="A picture of an example"
      sizes="(max-width: 500px) 100 vw, (max-width: 900px) 50vw, 800px"
      srcset="example-500.png" 500w, example-800.png 800w,
      example 1000.png 1000w, example-1400.png 1400w">
This example shows how the sizes attribute describes the size of the image in
relation to the viewport, with multiple conditions. 1vw = 1% of the window
width and 100vw is 100% of the window width. Depending on the window width,
the image is rendered in a percentage of the viewport.

picture tag:
The picture tag does a similar jog as the srcset but is used when instead of
rendering a smaller version of a file, a different image format or a completely
different file should be rendered. In the picture tag a list of images can be
specified and these will be used in order. Example:
  <picture>
      <source type="image.png" srcset="image.png"
      <img src="image.jpg" alt="An example image">
  </picture>
The img tag is the fallback option if the browser does not support the picture
tag.

________________________________________________________________________________

RESPONSIVE LAYOUT:
<meta name="viewport" content="width=device-width, initial-scale=1.0"> (after css
links).
The mobile-first approach is a way to design with consideration for the restrictions
posed by mobile phones: focus on core content and functionality, consider bandwidth.
There is a hierarchy of content, for example:
1 - site name
2 - content text
3 - resources
4 - author info
________________________________________________________________________________

#### Emmet abbrev
To get Lorem Ipsum dummy text to represent data on a page, type `lorem` and hit Enter. Emmet will generate 30 words of fake text that you can use as a filler in your project.

The amount of words generated can be defined as well: `lorem10` will give you 10 words of random text.