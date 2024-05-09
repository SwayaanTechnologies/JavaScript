const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle client connections
io.on('connection', (Socket) => {
  console.log('A user connected');

  // Handle mousemove event
  socket.on('mousemove', (data) => {
    console.log('Mouse position:', data);
    // You can perform actions based on mouse movement here
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});