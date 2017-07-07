const Comment = require('mongoose').model('Comment');
const Post = require('mongoose').model('Post');


module.exports = {
    index(req, res) {
        Post.find({}).populate('postedBy').populate('comments')
        .then(function(posts) {
            console.log(posts);
              res.json(posts);
        })
        .catch(function(err) {
            console.log(err);
        })
    },
    create(req, res) {
        console.log(req.params.id);
        Post.findOne({_id: req.params.id}, function(err, post) {
            var comment = new Comment(req.body);
            comment.postedBy = req.cookies.userID;
            comment._post = post._id;
            comment.save(function(err) {
                post.comments.push(comment);
                post.save(function(err) {
                    if (err) {
                        errorHandler.bind(res)
                    } else {
                        res.json(comment)
                    }
                })
            })
        })
        // console.log(post);
        // // console.log(req.body, req.cookies.userID);
        //
        // comment.postedBy = req.cookies.userID
        // comment.save()
        // post.comments.push(comment)
        // post.save()
        // .then(function(newComment) {
        //     res.json(newComment)
        // })
        // .catch(errorHandler.bind(res));
    },

};


function errorHandler(error){
  let errors = [];

  if (error.errors) {
    // console.log(error.errors.name.message);
    // for (const [field, errorObject] of Object.entries(error.errors)) {
    //   // console.log(item[1].message);
    //
    //   errors.push(errorObject.message);
    // }

    errors = Object.keys(error.errors).map(key => error.errors[key].message);
  } else if (typeof error === 'string') {
    errors.push(error);
  } else {
    errors.push(error.message);
  }

  console.log(errors);

  this.status(422).json(errors);
}
