const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema({

}, {timestamps : true})

module.exports = mongoose.model('Product', productSchema)


