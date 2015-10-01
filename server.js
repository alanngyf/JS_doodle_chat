// require express
var express = require('express');
// instantiate the app
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

// require path
var path = require('path');
// require body-parser
var bodyParser = require('body-parser');

// for regualr post requests
app.use(bodyParser.urlencoded({extended: true}));
// for post requests that want json back
app.use(bodyParser.json());

// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));

app.set('client', path.join(__dirname, "./client/partials"));

// app.get('/doodle', function(req, res){
// 	res.render('/partials/index.html');
// })

// requrie mongoose.js from config
// Note - you must include the mongoose.js file in your server.js file 
// before you require the routes.js file, for example, here is part of our server.js file: 
require('./server/config/mongoose.js');

// route setter
var route_setter = require("./server/config/routes.js");
route_setter(app);

require('./server/config/socketIo.js')(io);





http.listen(8888, function(){
	console.log("chat with doodle pad on port 8888");
});

// var io = require('socket.io').listen(server);

// // Whenever a connection event happens (the connection event is built in) run the following code
// io.sockets.on('connection', function (socket) {
//   console.log("WE ARE USING SOCKETS!");
//   console.log(socket.id);
//   //all the socket code goes in here!
// })
//  