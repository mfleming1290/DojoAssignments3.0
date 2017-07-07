var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Routes
app.get('/', function(req, res) {
 res.render("index");
})

app.post('/result', function(req, res) {
 console.log("POST DATA", req.body);
 // This is where we would add the user to the database
 // Then redirect to the root route
 res.render('results', {data: req.body});
})

var server = app.listen(8000, function() {
 console.log("listening on port 8000");
});


var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log("WE ARE USING SOCKETS!");
  console.log(socket.id);
  //all the socket code goes in here!
  socket.on("posting_form", function (data){
    console.log(data);
    var random_number = Math.floor((Math.random() * 1000) + 1);
    socket.emit('updated_message', {response: data });
    socket.emit('random_number', {response: random_number });
})

})
