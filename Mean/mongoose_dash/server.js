var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// Require and connect to mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pack');

//User Schema
var OtterSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 2},
    color: { type: String, required: true, maxlength: 200 },
    weight: { type: Number, required: true }

}, {timestamps: true });
mongoose.model('Otter', OtterSchema);
var Otter = mongoose.model('Otter')
mongoose.Promise = global.Promise;


// Routes
app.get('/', function(req, res) {
    Otter.find({}, function(err, users) {
    if(err) {
      console.log('something went wrong');
    } else {
      console.log('got to home');
      res.render('index', {data: users});
    }
  })
})

app.get('/mongooses/:id', function(req, res) {
    Otter.find({_id : req.params.id}, function(err, otters) {
    if(err) {
      console.log('something went wrong');
    } else {
      console.log('got to page single otter');
      res.render('otter', {data: otters[0]});
    }
  })
})

app.get('/mongoose/new', function(req, res) {
      res.render('new');

});

app.get('/mongoose/edit/:id', function(req, res) {
    Otter.find({_id : req.params.id}, function(err, otters) {
    if(err) {
      console.log('something went wrong');
    } else {
      console.log('got to page edit otter');
      res.render('update', {data: otters[0]});
    }
  })

});

app.post('/edited/:id', function(req, res) {
    console.log("working!");
    Otter.update({_id : req.params.id}, req.body, function(err, result) {
        console.log(req.body);
        if(err) {
          console.log('something went wrong');
        } else {
          console.log('updated info');
          res.redirect('/');
        }
    })
});

app.post('/delete/:id', function(req, res) {
    console.log("working!");
    Otter.remove({_id : req.params.id}, function(err, result) {
        if(err) {
          console.log('something went wrong');
        } else {
          console.log('updated info');
          res.redirect('/');
        }
    })
});
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
// Add User Request
app.post('/mongooses', function(req, res) {
  console.log("POST DATA", req.body.name);
  // create a new User with the name and age corresponding to those from req.body
  var otter = new Otter({name: req.body.name, color: req.body.color, weight: req.body.weight});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
  otter.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err) {
      console.log('something went wrong');
      res.render('index', {title: 'you have errors!', errors: user.errors})
    } else { // else console.log that we did well and then redirect to the root route
      console.log('successfully added a user!');
      res.redirect('/');
    }
  })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
