const {model, Schema, Types} = require('mongoose')

const schema = new Schema({
    title: {type: String, required: true, unique: true},
    index: {type: Number, required: true, unique: true}
}) 

module.exports = model('Panel', schema)