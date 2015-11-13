var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = 11100; 

io.set('log level',1);

// app.use(express.logger());
app.use(express.static(__dirname + '/public')); //rend le dossier public ... public :D


io.sockets.on('connection', function(socket) {
	socket.on('broadcast' , function(data) {
		socket.broadcast.emit( data.id, data.data);
	});
});


server.listen(port);

console.log("server is runing on port " + port);