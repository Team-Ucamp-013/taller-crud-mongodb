const mongoose = require('mongoose')
const {Schema} = mongoose

const granjaSchema = new Schema({
    tipo: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    enfermo: {
        type: String,
        required: true
    } 
},{
    versionKey: false,
    timestamps: true
})

const granjaModel = mongoose.model('animales', granjaSchema)

module.exports = granjaModel