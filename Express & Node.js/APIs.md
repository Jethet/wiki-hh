## Working with APIs

In terms of frontend and backend, this web service API (and its implementation) is the backend. Some parts of it may be publically  
accessible and others only to your frontend. A different name for this is "service layer", i.e. code that:  

* represents services which the frontend calls
* contains no display logic (that's the job of the frontend, after all)
* is more abstract and coarse grained than simple CRUD actions (one service call will often involve multiple CRUD actions and should be executed within a database transaction).
* contains the business logic of the application

The key concept to understand is that the backend processes information and the frontend receives input from a client. A client  
is anything that makes a request of a service. In simple systems, the client might be a human being, but in complex systems, the 
client might be another piece of code. As an example, consider a simple system that includes a website with a basic form for  
collecting newsletter subscriptions:  

* The application (or service) is the website.
* The client is the person visiting the website.
* The frontend is the HTML, CSS, and JavaScript that render the form in the browser and validate input.
* The backend is the server code that processes the form results.