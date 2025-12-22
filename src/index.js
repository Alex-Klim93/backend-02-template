const http = require("http");
const sayHi = require("./hellow");
const getUsers = require("./modules/users");

sayHi("World");

const hostname = "127.0.0.1";
const port = 3003;

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${hostname}:${port}`);
  const params = url.searchParams;
  console.log(url);
  console.log(url.searchParams);

  if (params.has("hello")) {
    const name = params.get("hello");

    if (!name || name.trim() === "") {
      response.statusCode = 400;
      response.setHeader("Content-Type", "text/plain");
      response.end("Enter a name");
      return;
    }

    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end(`Hello, ${name}.`);
    return;
  }

  if (params.has("users")) {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.end(getUsers());
    return;
  }

  if (params.toString() === "") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Hello, World!");
    return;
  }

  response.statusCode = 500;
  response.end();
});

server.listen(port, hostname, () => {
  console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
});
