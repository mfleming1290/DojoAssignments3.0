var mongoose = require('mongoose');
var Otter = mongoose.model('Otter')
module.exports = {
    show: function(req, res) {
        Otter.find({}, function(err, users) {
        if(err) {
          console.log('something went wrong');
        } else {
          console.log('got to home');
          res.render('index', {data: users});
        }
      })
  },
  one: function(req, res, id) {
      Otter.find({_id : id}, function(err, otters) {
      if(err) {
        console.log('something went wrong');
      } else {
        console.log('got to page single otter');
        res.render('otter', {data: otters[0]});
      }
    })
   },
   edit: function(req,res,id) {
       Otter.find({_id : id}, function(err, otters) {
       if(err) {
         console.log('something went wrong');
       } else {
         console.log('got to page edit otter');
         res.render('update', {data: otters[0]});
       }
     })
   },
   editone: function(req,res,id) {
       console.log(id);
       Otter.update({_id : id}, req.body, function(err, result) {
           console.log(req.body);
           if(err) {
             console.log('something went wrong');
           } else {
             console.log('updated info');
             res.redirect('/');
           }
       })
   },
   delete: function(req, res, id) {
       console.log(id);
       Otter.remove({_id : id}, function(err, result) {
           if(err) {
             console.log('something went wrong');
           } else {
             console.log('updated info');
             res.redirect('/');
           }
       })
   },
   new: function(req, res) {
       var otter = new Otter({name: req.body.name, color: req.body.color, weight: req.body.weight});
       otter.save(function(err) {
         if(err) {
           console.log('something went wrong');
           res.render('index', {title: 'you have errors!', errors: user.errors})
         } else {
           console.log('successfully added a user!');
           res.redirect('/');
         }
       })
   }

}
