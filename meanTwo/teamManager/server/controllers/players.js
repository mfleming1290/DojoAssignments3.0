const Player = require('mongoose').model('Player')

module.exports = {

    index(req, res) {
        Player.find({})
        .then(players => res.json(players))
        .catch(err => console.log(err))
    },
    create(req, res) {
        Player.create(req.body)
        .then(newPlayer => res.json(newPlayer))
        .catch(err => console.log(err))
    },
    delete(req, res) {
        console.log('working');
        console.log(req.params.id);
        Player.findByIdAndRemove(req.params.id)
        .then(player => console.log(`${player.name} has been removed`))
        .catch(err => console.log(err))
    }
}
