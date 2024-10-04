// Create web server
// Create a web server that listens to a port and logs the requests to the console.
// Use the createServer method from the http module.
// The createServer method takes a callback function that takes a request and a response object.
// The request object contains information about the request such as the url, method, headers, and body.
// The response object is used to send a response back to the client.
// The response object has methods like writeHead and end to set the response headers and body.
// Use the listen method on the server object to start the server listening on a port.
// The listen method takes the port number to listen on and an optional callback function that is called when the server starts.
// The server should listen on port 3000 and log 'Server listening on port 3000' when it starts.

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});