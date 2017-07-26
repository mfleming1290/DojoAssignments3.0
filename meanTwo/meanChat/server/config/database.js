const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const modelsDir = path.resolve('server', 'models')
const reg = new RegExp('.js', 'i')


mongoose.connect('mongodb://localhost/meanChat');
mongoose.connection.on('connected', () => console.log('Connected to mongodb'));
mongoose.Promise = global.Promise

fs.readdirSync(modelsDir).forEach(function(file) {
    if (reg.test(file)) {
        require(path.join(modelsDir, file));
    }
})
