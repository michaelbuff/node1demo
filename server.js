const http = require("http");


http.createServer(function(request, response) {    
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Welcome to my other website!</h1>");    
    response.end();
 }).listen(3006);
