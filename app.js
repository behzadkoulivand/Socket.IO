const http = require('http');

const express = require('express');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);


// Static Folder
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Srever is running on port ${3000}`);
});

// Setup WebSocket

io.on('connection', socket => {
    console.log(`User connected ${socket.id}`);

    socket.on("disconnect", () => {
        console.log(`User disconnected.`);
    })
});