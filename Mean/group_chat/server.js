var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

//server
var server = app.listen(6789, function() {
	console.log("listening on port 6789");
})

// Routes
var route = require('./routes/routes.js')(app, server);
