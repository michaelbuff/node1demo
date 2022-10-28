const http = require("http");


http.createServer(function(request, response) {    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello  NodeJS</h1>");    
    response.write("<h3>Michael Buffington's (m49v138) MERN1 Assignment</h3>");
    response.write("<p>brought to you on <i>port 3006</i></p>")
    response.end();
 }).listen(3006);