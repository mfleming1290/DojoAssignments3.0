const mongoose = require('mongoose');
const { Schema } = mongoose;

const gameSchema = new Schema ({
    name: {
        type: String,
        trim: true,
    },
    img: {
        type: String,
    },
    summary: {
        type: String,
    },
    rating: {
        type: String,
    },
    release: {
        type: String,
    },
    link: {
        type: String,
    }
});

module.exports = mongoose.model('Game', gameSchema);
