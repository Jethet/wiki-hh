## Create project structure with backend and frontend in project folder

The most basic structure would be to have a root folder that contains frontend and backend folders.  

For the MERN stack, this means a package.json inside of the NodeJS backend environment and a package.json for  
the frontend (with React). Backend server and frontend client are two totally separate things, so they both  
have their own `node_modules` folders and this means `npm init` has to be done in each folder. For both folders,  
a .gitignore file needs to be created.

**Dependencies**  
On the backend, Express will be installed for Node runtime, packages such as Nodemon, etc.  
On the frontend, React will be the framework, and all React dependencies will be installed, Nodemon, etc.  

**PORT**  
The PORT variable has to be adjusted. In the Express app, PORT will default to port 3000, and with Create React App   
PORT will also default to port 3000. To avoid the conflict, change the PORT variable in Express to 3001.

**Configure the Proxy in React app**  
This is the **key change** that will let the React app connect to the Express backend. Inside the React app’s folder (client),  
open up package.json (it should have “react” and “react-scripts” in it). Under the “scripts” section, add the “proxy” line like this:  
```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  },
  "proxy": "http://localhost:3001"
```

The port (3001) in the proxy line must match the port that the Express server is running on. This can point to any server.  
It can be another local backend in Java or Python, or it could be a server on the internet. The way this works is, any  
time the React app makes a request to something that is not a static asset (i.e. not an image or CSS or index.html), it will  
forward the request to the server specified in "proxy":  
* package.json has `"proxy": "http://your-server"`
* the React app calls `http://localhost:3000/api/users`
* dev server forwards the call to 'http://your-server/api/users`

