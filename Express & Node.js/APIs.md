## Working with APIs

APIs are tools for developers to interact with web services, either to access and use their data or to make two services interact with each other.

An API request requires:
* an HTTP method describing the type of request
* an endpoint (URL)
Other elements can be:
* a body of data
* headers with additional info

A base URL is needed and this has to be prepended to every URL used in a request.
(NB in the project-boundlessbooks repo there is a small API tutorial code with comments regarding requests)

The response from the server comes with an HTTP status code (200, 404, etc.)

**Axios** is used to make consistent requests in the browser:  
```
axios.get("some.url").then(response => {
  console.log("This is the response data:", response)
})
```
With Axios you can avoid the step of changing response data into JSON format. Axios also has better backwards compatibility.

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