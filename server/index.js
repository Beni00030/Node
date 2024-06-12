
const express = require('express');
const WebSocket = require('ws');
const path = require('path');
 
const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });
 
// Adjust the path to point to the public directory
app.use(express.static(path.join(__dirname, '../public')));
 
wss.on('connection', (ws) => {
    console.log('A client connected');
    
    
 
    ws.on('message', (message) => {
        console.log('Received: ' + message);
        

        // Broadcast message to all clients
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});
 
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

