const { Server } = require("http");

/* create a http server */
const server = new Server();

const welcomePage = `<html>
 <head><title>My First Page</title></head>
 <body><h1>Hello from my Node.js Server!</h1></body>
 </html>`;
const defaultPage = `<html>
 <head><title>My First Page</title></head>
 <body>
 <h1>This Page is not available!</h1>
 <h2>Take me <a href="/index.html">home</a>.</h2>
 </body>
 </html>`;

/* Register a callback for request events */
server.on("request", (request, response) => {
  response.setHeader("Content-Type", "text/html");
  if (request.url === "/index.html") {
    return response.end(welcomePage);
  }
  response.statusCode = 404;
  response.end(defaultPage);
});

/* Bind server to a port and hostname*/
const port = 8080;
const host = "127.0.0.1";
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
