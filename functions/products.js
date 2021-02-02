const MongoClient = require("mongodb").MongoClient

const MONGODB_URI = process.env.MONGODB_URI
const DB_NAME = 'jegan'

let cachedDb = null

const connectToDatabase = async ( uri ) => {
	if (cachedDb) return cachedDb
	const client = await MongoClient.connect( uri, {
		useNewUrlParser: true, useUnifiedTopology: true
	})
	cachedDb = client.db(DB_NAME)
	return cachedDb
}

const queryDatabase = async ( db ) => {
	const products = await db.collection("products").find({}).toArray()
	return {
		statusCode: 200,
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(products)
	}
}

module.exports.handler = async ( event, context ) => {
	context.callbackWaitsForEmptyEventLoop = false
	const db = await connectToDatabase(MONGODB_URI)
	return queryDatabase(db)
}