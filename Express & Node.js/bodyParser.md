The Express package includes a json parser. Add this line to the server code:  
`app.use(express.json())`  

The express.json() function is a **built-in middleware** function in Express. It parses incoming requests with JSON payloads and is based on body-parser.

Syntax: `express.json( [options] )`  
The options parameter has various property like inflate, limit, type, etc.
