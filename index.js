const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB}/jegan?retryWrites=true&w=majority`

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

async function getTable() {
	await client.db("jegan").collection("stock")
		.find()
		.forEach(console.dir)
}

async function postRow() {
	await client.db("jegan").collection("stock")
		.insert({ product: 'thank_you', materials: [ 'card', 'envelope' ] })
}

async function connDB() {
	try {
		await client.connect()
		await postRow()
		await getTable()
	} catch (err) {
		throw err
	} finally {
		await client.close()
	}
}

connDB()
