module.exports = function Route(app, server){
	// this gets the socket.io module
	var io = require('socket.io').listen(server)
	// root route to render the index.ejs view
    var count = 0;
	app.get('/', function(req, res) {
		res.render("index");
	})
	//listen to connection even from the client side
	io.sockets.on('connection', function (socket){

        console.log(socket.id);
		//server listens to "posting_form" event
	 	socket.on("update_count", function (data){
            count += 1
            // console.log(count += counted);
    		io.emit('updated_count', {response: count});
		});
        socket.on("reset_count", function (data){
            count = 0;
            // console.log(count += counted);
    		io.emit('base_count', {response: count});
		})
	})
};
