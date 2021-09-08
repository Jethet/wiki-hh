### AJAX

AJAX stands for Asynchronous Javascript And XML. In this context, asynchronous means: in the background, not requiring a page refresh. XML is a data format very similar to JSON. JSON has replaced XML as the more popular data format.

Web browsers have a built-in tool called XMLHttpRequest to do the heavy lifting:  
* establish a connection with a URL that is specified
* receive data: GET request
* send data: POST request

To us XMLHttpRequest, you can create a new instance of the tool and save it in a variable: `let  ourRequest = new XMLHttpRequest()`.

The open() method is used to specify what the request should be. It receives two arguments:
* send or receive data (POST or GET)
* url to be connected to

To use the response, an anonymous function can be added to 'onload': `ourRequest.onload = function() {}`
NB: the data is JSON format, but the webbrowser will interpret the response as plain text. 
You have to format the response with `JSON.parse()`.