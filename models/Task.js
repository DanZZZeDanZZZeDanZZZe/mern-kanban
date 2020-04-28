const {Schema, Types, model} = require('mongoose')

const schema = new Schema({
    id: {
        type: String, 
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
        maxlength: 300
    },
    text: {
        type: String,
        maxlength: 3000
    },
    index: {
        type: Number,
        required: true
    },
    panelTitle: {
        type: String,
        required: true,
        maxlength: 3000
    }
})

module.exports = model('Task', schema)