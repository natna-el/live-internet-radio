const http = require("http");
const app = require("./app");

// init server
const server = http.createServer(app);

// listen to port `process.env.PORT`
server.listen(process.env.PORT);

// on listener events
server.on("listening", () => {
  console.log("> server listening to port " + process.env.PORT);
});

server.on("error", err => {
  console.log("> server error: " + err.message);
});

server.on("close", () => {
  console.log("> Server is no longer listening to port " + process.env.PORT);
});
