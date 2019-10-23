const { Server } = require("http");

/* create a http server */
const server = new Server();

/* Register a callback for request events */
server.on("request", (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.write("<html>");
  response.write("<head>");
  response.write("<title> My First Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("<h1>Hello there</h1>");
  response.write("</body>");
  response.write("</html>");
  response.end();
});

/* Bind server to a port and hostname*/
const port = 8080;
const host = "127.0.0.1";
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
