## Response Codes

Once a request goes through from the client to the server, the server will send back an HTTP response, which will include  
metadata about the response known as headers, as well as the body. The first and most important part of the response is  
the status code, which indicates if a request was successful, if there was an error, or if another action must be taken.

There are five classes of status codes that each contain a range of responses:

class | code | response type
:----:|------|--------------
1 | 1xx | Information
2 | 2xx | Success
3 | 3xx | Redirection
4 | 4xx | Client Error
5 | 5xx | Server Error


* `301 Moved Permanently` is used to redirect websites to new URLs
* `500 Internal Server Error` comes up frequently when something unexpected has happened on a server that makes it impossible to fulfil the intended request.
* `200 OK` is the response that indicates that a request is successful. It is used as a response when sending a `GET` or `PUT` request.  
* `POST` will return a `201 Created` to indicate that a new resource has been created.  
* `DELETE` has a few acceptable responses, which convey that either the request has been accepted (`202`), or there is no content to return because the resource no longer exists (`204`).  
