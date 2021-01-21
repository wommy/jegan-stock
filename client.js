const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const uri = `mongodb+srv://${process.env.DB}/jegan?retryWrites=true&w=majority`
module.exports = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })