## Packages backend

*When the Node packages do not appear after npm i, you can install a package like nodemon or Express and  
usually node_modules will appear - it takes some time.

**Nodemon:**
In `"scripts"` add `"start": "nodemon *filename*"`, for example `app.js`, `index.js` or `server.js`  

**Errors such as:**
Problems loading reference 'http://json.schemastore.org/package':  
Unable to load schema from 'http://json.schemastore.org/package'  
Unable to load schema from 'http://json.schemastore.org/package': Request vscode/content failed unexpectedly without providing any details.  
**can be solved by restarting VSC**  
