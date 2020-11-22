## Error: cannot set headers
When getting this type of error using Postman to test an endpoint:  
>Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    >at ServerResponse.setHeader (_http_outgoing.js:536:11)
    >at ServerResponse.header (/Users/henriettehettinga/Coding-various/10-MIGRACODE/>Node-Databases Module/node-challenge-chat-server/node_modules/express/lib/response.>js:771:10)
    >at ServerResponse.send (/Users/henriettehettinga/Coding-various/10-MIGRACODE/Node-Databases >Module/node-challenge-chat-server/node_modules/express/lib/response.js:170:12)  
you should add a **return** somewhere to get out of sending the request.

**Code example:**
```
app.post("/messages", (req, res) => {
  const newMessage = req.body;
  if (newMessage.from === "" || newMessage.text === "") {    
    res.send("Statuscode 400");
    return
  } else {
    messages.push(newMessage);
  }
  res.send(messages);
});
```
Here the **return** ensures that the res.send("Statuscode 400") is stopped. The rest of the app.post() function tries to execute, so this means the code is trying to redirect and render simultaneously. 