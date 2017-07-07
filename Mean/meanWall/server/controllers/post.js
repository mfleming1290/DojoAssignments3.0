const Post = require('mongoose').model('Post');
module.exports = {
    index(req, res) {
        Post.find({})
        .populate('postedBy')
        .populate({path: 'comments', populate : {path: 'postedBy' }})

        // .populate('comments').populate('postedBy')
        .then(function(posts) {
            console.log(posts);
              res.json(posts);
        })
        .catch(function(err) {
            console.log(err);
        })
    },
    create(req, res) {
        console.log(req.body, req.cookies.userID);
        var post = new Post(req.body)
        post.postedBy = req.cookies.userID
        post.save()
        .then(function(newPost) {
            res.json(newPost)
        })
        .catch(errorHandler.bind(res));
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
