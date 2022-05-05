const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    playerOne: {
        type: Number,
        required: true
    }, 
    playerTwo: {
        type: Number,
        required: true
    },
    playerThree: {
        type: Number,
        required: true
    },
    playerFour: {
        type: Number,
        required: true
    },
    player1Array: {
        type: Array,
        required: true
    },
    player2Array: {
        type: Array,
        required: true
    },
    player3Array: {
        type: Array,
        required: true
    },
    player4Array: {
        type: Array,
        required: true
    }
});
const Result = mongoose.model('Result', resultSchema);
module.exports = Result;