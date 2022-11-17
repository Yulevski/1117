const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


app.use(express.static(__dirname + ''));

server.listen(3000, () => {
  console.log('listening on *:3000');
});