const http = require("http");

/* create a http server */
function requestCallback(request, response) {
  response.end("Hello Node.js");
}

const server = http.createServer(requestCallback);

/* Bind server to a port */
server.listen(8080);
