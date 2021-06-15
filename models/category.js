const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

const categorySchema = new mongoose.Schema({

}, {timestamps : true})

module.exports = mongoose.model('Category', categorySchema)


