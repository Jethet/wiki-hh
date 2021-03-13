### Accessible Rich Internet Applications (ARIA)
See *Accessibility* folder.

### Content Delivery Network (CDN)
A CDN is a system of geographically distributed servers that work together to provide fast delivery of Internet content.  
It's designed to minimize latency in loading web pages by reducing the physical distance between the server and the user.  
A CDN allows for a quick transfer of assets needed to load content such as HTML pages, javascript files, stylesheets,  
images, and videos.  
A well-configured CDN can also help protect against common malicious attacks such as Distributed Denial of Service (DDoS)  
attacks. Over half of all internet traffic is served by CDNs.

**How a CDN works**  
To minimize distance between visitors and the website's server, a CDN stores a cached version of its content in multiple  
geographic locations known as the points of presence (PoP). Each PoP contains caching servers designed to deliver content  
to visitors within its proximity.  
For example, a visitor in the United States wishing to view content that originates from a UK-based server will have to  
deal with slow loading times if the request has to travel across the Atlantic Ocean. To eliminate the latency a CDN will  
store the content in a local United States PoP.

### CORS: Cross-Origin Resource Sharing
Cross-Origin Resource Sharing (CORS) is a protocol that enables scripts running on a browser client to interact with  
resources from a different origin. This is useful because, thanks to the same-origin policy followed by XMLHttpRequest  
and fetch, JavaScript can only make calls to URLs that live on the same origin as the location where the script is running.  
For example, if a JavaScript app wishes to make an AJAX call to an API running on a different domain it would be blocked  
from doing so, thanks to the same-origin policy.  
A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos. CORS defines a way in which a  
browser and server can interact to determine whether it is safe to allow the cross-origin request. It allows for more freedom  
and functionality than purely same-origin requests, but is more secure than simply allowing all cross-origin requests.   
See **CORS.md** in folder *Express & Node.js*  

**SDK:** Software Development Kit  
