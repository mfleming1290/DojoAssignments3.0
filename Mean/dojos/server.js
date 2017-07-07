var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Require and connect to mongoose
require('./config/mongoose_setup.js')
require('./config/routes.js')(app)




// ****** Server ******
app.listen(8000, function(){
	console.log("server running on port 8000");
});
