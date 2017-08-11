const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');
const Post = mongoose.model('Post');

module.exports = {
    create(req, res) {
        var comment = new Comment(req.body.comment)
        comment.user_id = req.cookies.userID
        comment.save()
            .then((comment) => {
                console.log('test', comment);
                Post.findById(req.body._post)
                .then((post) => {
                    console.log('test', comment);
                    console.log('test', post);
                    post.comments.push(comment)
                    post.save()
                })
            })
    // .catch(errorHandler.bind(res))
}
}

// console.log('serverside',req.body.comment.comment);
// Comment.create(req.body.comment)
// Post.findById(req.body._post)
// .then((post) => {
//     console.log('post',post);
//     post.comments.push(post)
//     post.save()
// })


function errorHandler(error){
  let errors = [];

  if (error.errors) {
    errors = Object.keys(error.errors).map(key => error.errors[key].message);
  } else if (typeof error === 'string') {
    errors.push(error);
  } else {
    errors.push(error.message);
  }

  console.log(errors);

  this.status(422).json(errors);
}
