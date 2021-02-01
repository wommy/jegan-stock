const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
module.exports = new MongoClient(process.env.mURI, { useNewUrlParser: true, useUnifiedTopology: true })