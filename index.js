const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB}/jegan?retryWrites=true&w=majority`

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

const quantityArr = require('./quantityArr.json')

async function connDB() {
	try {
		await client.connect()
		await client.db("jegan").collection("quantities")
			.insertMany( quantityArr )
		await client.db("jegan").collection("quantities")
			.find().forEach(console.dir)
	} catch (err) {
		throw err
	} finally {
		await client.close()
	}
}

connDB()
