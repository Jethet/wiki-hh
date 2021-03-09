## Create project structure with backend and frontend in project folder

The most basic structure would be to have a root folder that contains frontend and backend folders.  

For the MERN stack, this means a package.json inside of the NodeJS backend environment and a package.json for  
the frontend (with React). Backend server and the frontend client are two totally separate things, so they both  
have their own `node_modules` folders and this means `npm init` has to be done in each folder. For both folders,  
a .gitignore file needs to be created.

**Dependencies**  
On the backend, Express will be installed for Node runtime, packages such as Nodemon, etc.  
On the frontend, React will be the framework, and all React dependencies will be installed, Nodemon, etc.  

