const Topic = require('mongoose').model('Topic');
const Post = require('mongoose').model('Post');

module.exports = {
    index(req, res) {
        Post.find({}).populate('user_id')
        .populate('comments')
        .then(function(posts) {
            console.log(posts);
              res.json(posts);
        })
        .catch(function(err) {
            console.log(err);
        })
    },
    create(req, res) {
        Topic.findById(req.params.id)
        .then(function(topic) {
            var post = new Post(req.body);
            post.user_id = req.cookies.userID;
            post.topic_id = topic._id;
            post.save(function(err) {
                console.log('post test', post);
                topic.answers.push(post)
                topic.save(function(err) {
                    if (err) {
                        errorHandler.bind(res)
                    } else {
                        res.json(post)
                    }
                })
            })
        })
        .catch(function(err) {
            console.log(err);
        })
        // console.log(req.params.id);
        // Topic.findOne({_id: req.params.id}, function(err, topic) {
        //     var post = new Post(req.body);
        //     post.user_id = req.cookies.userID;
        //     post.topic_id = topic._id;
        //     post.save(function(err) {
        //         console.log('post test', post);
        //         topic.answers.push(post)
        //         topic.save(function(err) {
        //             if (err) {
        //                 errorHandler.bind(res)
        //             } else {
        //                 res.json(post)
        //             }
        //         })
        //     })
        // })

    },
    show(req, res) {
		Post.find({topic_id: req.params.id}, function(err, data) {
			if(err)
				console.log("post 19", err)
			else
				res.json(data)
		})
        .populate('user_id')
        .populate({
            path: 'comments',
            populate: {
                path: 'user_id',
                model: 'User'
            }
        })
	},

};


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
