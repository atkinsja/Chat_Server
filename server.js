var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var ip = require('ip');
var PORT = 8080;

var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, '/views')));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket){
  console.log('user connected');
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
});

http.listen(8080, function(){
  console.log('Server listening on ' + ip.address() + ' on port ' + PORT);
});