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
mongoose.connect('mongodb://localhost/post_comment');

//Schema
var Schema = mongoose.Schema;
// define Post Schema
var PostSchema = new mongoose.Schema({
 text: {type: String, required: true },
 comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });
// define Comment Schema
var CommentSchema = new mongoose.Schema({
 _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 text: {type: String, required: true }
}, {timestamps: true });
// set our models by passing them their respective Schemas
mongoose.model('Post', PostSchema);
mongoose.model('Comment', CommentSchema);
// store our models in variables
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
mongoose.Promise = global.Promise;
//Routes

app.get('/test', function (req, res){
 Post.find({}).populate('_comments').exec(function(err, post) {
      res.render('index_two', {data: post});
        });
});

app.get('/', function(req, res) {
    Post.find({}, function(err, posts) {
    if(err) {
      console.log('something went wrong');
    } else {
      console.log('got to home');
      res.render('index', {data: posts});
    }
  })
})

app.get('/posts/:id', function (req, res){
 Post.findOne({_id: req.params.id})
 .populate('comments')
 .exec(function(err, post) {
      res.render('comment', {post: post});
        });
});

app.post('/posts', function(req, res) {
  console.log("POST DATA", req.body.name);
  var post = new Post(req.body);
  post.save(function(err) {
    if(err) {
      console.log('something went wrong');
      res.render('index', {title: 'you have errors!', errors: post.errors})
    } else {
      console.log('successfully added a post!');
      res.redirect('/test');
    }
  })
})

app.post('/comment/:id', function (req, res){
  Post.findOne({_id: req.params.id}, function(err, post){
         var comment = new Comment(req.body);
         comment._post = post._id;
         post.comments.push(comment);
         comment.save(function(err){
                 post.save(function(err){
                       if(err) { console.log('Error'); }
                       else { res.redirect('/'); }
                 });
         });
   });
 });

// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
