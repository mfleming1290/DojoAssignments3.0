var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');
// Require and connect to mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pack');

//User Schema



// Routes
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
