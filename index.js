const client = require("./client")

async function get( collectionName ) {
	await db.collection( collectionName )
		.find().forEach(console.dir)
}

async function connDB() {
	try {
		await client.connect()
		db = client.db("jegan")
		await get("products")
	} catch (err) { throw err
	} finally { await client.close() }
}

connDB()