const http = require("http");

const server = http.createServer((req, res) => {

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to my server");
  }

  else if (req.method === "GET" && req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About us");
  }

  else if (req.method === "GET" && req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Contact us");
  }

  else if (req.method === "GET" && req.url === "/time") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(new Date().toString());
  }

  else if (req.method === "GET" && req.url === "/api/student") {
    res.writeHead(200, { "Content-Type": "application/json" });

    const student = {
      name: "Jawrell",
      course: "Node.js",
      week: 1
    };

    res.end(JSON.stringify(student));
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }

});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});