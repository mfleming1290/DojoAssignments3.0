var users = [];
var current_messages = []

var is_user = function(user) {
  var users_count = users.length;

  for (var i = 0; i < users_count; i++) {
    if (user == users[i]) {
      return true;
    }
  }
  return false;
}

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
		socket.on('page_load', function(data) {
				if (is_user(data.user) === true) {
					socket.emit("user_exists", {error: "User exists"})
				} else {
					users.push(data.user)
					console.log(data.user);
					socket.emit("load_messages", {cur_user: data.user, messages: current_messages})
				}
		})

		socket.on("sending_message", function (data){
		  console.log("sending" + data.message_user);
		  current_messages.push({name: data.message_user, message: data.messaged})
		  io.emit('updated_message', {newest_messsage: data.messaged, mess_user: data.message_user });
		})


	})
};
