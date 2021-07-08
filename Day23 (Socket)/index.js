const express = require('express')
const app = express();
var server = require('http').createServer(app);

var io = require('socket.io')(server)

// emit %% on 
app.use(express.static(__dirname + '/node_modules'));

app.use('/', (req, res, next)=>{
    res.sendFile(__dirname + '/index.html');
})

io.on('connect', function(client){
    console.log("Client Connected");

    client.on('join', function(data){
        console.log(data);
    })

    client.on('message', function(data){
        client.emit('broad', data);
        client.broadcast.emit('broad', data);
    })
})
server.listen(3000);