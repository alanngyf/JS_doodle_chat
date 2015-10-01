var doodlesController = require('./../controllers/doodles.js');
module.exports = function(io)
{
	io.on('connection', function(socket){
	  	console.log('a user connected');
	  	// If you don't know where this code is supposed to go reread the above info 
		socket.on("drawling_req", function (data){
		    // console.log(data);
		    socket.broadcast.emit("drawling_response", data);
		    // socket.emit('server_response', {response: "sockets are the best!"});
		})	
		// socket.on("drawling_req_end", function (data){
		//     console.log(data);
		//     // socket.emit('server_response', {response: "sockets are the best!"});
		// })



	//******************message board************************
		socket.on("send_msg", function(data)
		{
			doodlesController.save_message(data);
			io.emit("get_msg", data);
		})
	});
}