# ACCESSIBILITY

Accessible HTML allows people with disabilities to use the Web using a screen
reader. It is possible to make an existing web page accessible after publishing.

Main points are:
* Use **semantic** HTML

* Correct **structure** for heading tags: same level headings should have the
same meaning (tree structure)

* Use **strong** and **em** instead of b and i: the first two have meaning associated
with them, although visually strong and b look the same.

* **Lists** are important: a screen reader detects a list and provides an overview
to let the user choose to get into the list or not.

* A **table** should have a caption tag that describes its content.

* Use alt attributes for **images** (required)

* Use the **role attribute**:
The role attribute assigns specific roles to various elements in a webpage.
Examples are: complementary, list, listitem, main, navigation, region, tab,
alert, application, article, banner, button, cell, checkbox, contentinfo,
dialog, document, feed, figure, form, grid, gridcell, heading, img, listbox,
row, rowgroup, search, switch, table, tabpanel, textbox, timer.
The role attribute is only needed to assign a meaningful value if the tag in
the HTML does not convey the meaning. Example: <nav> is clear for a screen
reader as value for navigation.

* Use the tabindex attribute:
By default only links and form elements are 'selectable' by navigation using
tabs. The tabindex attribute allows changing the order of how pressing 'tab'
selects selectable elements. Example:
    `<div tabindex="0"> .... </div>` makes an element selectable.
Using tabindex="-1" removes an element from this tab-based navigation and
can be useful.

* Use the ARIA attributes: Accessible Rich Internet Applications
ARIA defines semantics that can be applied to elements:

aria-label is used to add a string to describe an element; example:
    `<p aria-label="The description of the product">....</p>`

aria-labelledby sets a correlation between the current element and the
one that labels it. The item id that describes the current element is
passed:
    `<h3 id="description">The example description</h3>`
    `<p aria-labelledby="description"> ..... </p>`

aria-describedby associates an element with another element that serves
as description:
    `<button aria-describedby="payNowDescription">Pay now</button>`
    `<div id="payNowDescription">Clicking the button sends you to the form</div>`

area-hidden="true" can be used to ignore elements in a webpage that are
not relevant for the experience of a person who cannot see the page (like
a logo picture or dark/bright theme selector).
