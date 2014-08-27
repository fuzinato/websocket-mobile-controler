var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index.html');
});


http.listen(3000, function(){
  console.log('listening on *:3000');
});

io.on('connection', function(socket){
  socket.on('socketmessage', function(rotZ,rotY,rotX){
    io.emit('socketmessage', rotZ,rotY,rotX);
	// console.log(msg);
  });
});


