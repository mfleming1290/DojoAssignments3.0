const mongoose = require('mongoose');
const Topic = mongoose.model('Topic');
const Post = require('mongoose').model('Post');


module.exports = {
    index(req, res) {
        Topic.find({})
        .populate('user_id')
        .populate({path: 'posts', populate : {path: 'user_id' }})
        .then(function(topics) {
            console.log(topics);
              res.json(topics);
        })
        .catch(function(err) {
            console.log(err);
        })
    },
    create(req, res) {
        console.log(req.body, req.cookies.userID);
        var topic = new Topic(req.body)
        topic.user_id = req.cookies.userID
        topic.save()
        .then(function(newTopic) {
            res.json(newTopic)
        })
        .catch(errorHandler.bind(res));
    },
    show(req, res) {
        console.log('inside controller');
        Topic.findById(req.params.id)
        .populate('user_id')
        .then(function(topic) {
            console.log(topic);
            res.json(topic);
        })
        .catch(errorHandler.bind(res))
    },
}

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
