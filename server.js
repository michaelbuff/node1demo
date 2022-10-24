const http = require("http");

http.createServer(function(request, response) {    
   response.writeHead(200, {"Content-Type": "text/html"});
   response.write("<h1>Hello, Node.js!</h1>");    
   response.write("<h2>Michael's First Project</h2>");
   response.write('<h2>click <a href="localhost:3006">here</a> to visit my other site</h2>');
   response.write("<p>why doesn't this linking work great?</p>")
   response.end();
}).listen(3000);

http.createServer(function(request, response) {    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Welcome to my other website!</h1>");    
    response.write('<h2>click <a href="localhost:3000">here</a> to visit my other site</h2>');
    response.write("<p>why doesn't this linking work great?</p>")
    response.end();
 }).listen(3006);