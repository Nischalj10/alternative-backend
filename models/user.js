const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

const userSchema = new mongoose.Schema({
    



}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)