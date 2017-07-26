const Chat = require('mongoose').model('Chat');

module.exports = {
    index(req, res) {
        res.send('Express REST API')
    },
    /* GET ALL CHATS */
    room(req, res, next){
        console.log('in room cont');
        Chat.find({ room: req.params.room })
        .then((chats) => {res.json(chats)})
        .catch((err) => {return next(err)})
    },
    /* GET SINGLE CHAT BY ID */
    findChat(req,res,next){
        Chat.findById(req.params.id)
        .then((post) => res.json(post))
        .catch((err) => {return next(err)})
    },
    /* SAVE CHAT */
    create(req,res,next){
        console.log('in create controller');
        Chat.create(req.body)
        .then((post) => { res.json(post) })
        .catch((err) => {return next(err)})
    },
    /* UPDATE CHAT */
    update(req,res,next) {
    Chat.findByIdAndUpdate(req.params.id, req.body)
    .then((post) => { res.json(post) })
    .catch((err) => {return next(err)})
    },
    delete(req,res,next) {
        Chat.findByIdAndRemove(req.params.id, req.body)
        .then((post) => { res.json(post) })
        .catch((err) => {return next(err)})
    }
}
