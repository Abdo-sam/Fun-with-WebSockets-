const WebSocket = require("ws");
const PORT = 5000;
const wsServer = new WebSocket.Server({
    port: PORT
});
wsServer.on("connection",socket=>{console.log("clint connect");socket.on("message",msg=>{console.log(msg+" by clint");wsServer.clients.forEach (client=>client.send("someone said: "+msg))})})
console.log((new Date())+ "from port: "+PORT)