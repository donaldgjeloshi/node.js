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
const todoPage = `<html>
 <head><title>My First Page</title></head>
 <body>
  <form action="/todo/add" method="POST">
    <div><input type="text" name="todo" autofocus/></div>
    <div><button type="submit">Create</button></div>
  </form>
 </body>
 </html>`;

/* Register a callback for request events */
server.on("request", (request, response) => {
  const { url } = request;
  if (url === "/") {
    response.writeHead(301, { Location: "/index.html" });
    return response.end();
  } else {
    response.setHeader("Content-Type", "text/html");
    if (url === "/index.html") {
      return response.end(welcomePage);
    } else if (url === "/todo.html") {
      return response.end(todoPage);
    } else if (url === "/todo/add") {
      console.log(request.method);
      response.writeHead(302, { Location: "/" });
      return response.end();
    }
  }
  /** ich kann so schreiben dann wird kein 404 Error in der Seite haben und dann default page*/
  //response.setHeader("Content-Type", "text/html");
  /* Oder ich kann ein Fehler generieren und dann default page */
  response.statusCode = 404;
  response.end(defaultPage);
});

/* Bind server to a port and hostname*/
const port = 8080;
const host = "127.0.0.1";
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
