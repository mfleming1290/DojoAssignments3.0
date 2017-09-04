const errorHandler = require('./errors')
const igdb = require('igdb-api-node').default;
global['3scaleKey'] = 'c99b911c81bb0405903fe00d13c4d152';
const client = igdb();
const Game = require('mongoose').model('Game')

module.exports = {  
    test(req, res) {
        console.log('in test controller')
        client.games({
            search: 'zelda'
        }, [
            'name',
            'cover'
        ])
        .then(games => res.json(games))
        .catch(errorHandler.bind(res))

    },
    show(req, res) {
        console.log('in test controller', req.params.id)
        client.games({
            ids: [req.params.id],
            fields: '*'
        })
        .then((game) => {
            console.log(game)
            res.json(game)
        })
        .catch(errorHandler.bind(res))
        

    },
    find(req, res) {
        console.log('in game controller')
        client.games({
            search: req.body.title
        }, [
            'name',
            'cover'
        ])
        .then((games) => {res.json(games); console.log(games);})
        .catch(errorHandler.bind(res))

    }, 
    
    add(req, res) {
        console.log('game controller', req.body)
        Game.create(req.body)
		.then(game => {
			res.json(game)
		})
		.catch(errorHandler.bind(response));
    }
    



}