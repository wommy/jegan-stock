const client = require("./client")

async function get( collectionName ) {
	await client.db("jegan")
		.collection( collectionName )
		.find().forEach(console.dir)
}

async function connDB() {
	try {
		await client.connect()
		await get("stock")
		await get("quantities")
	} catch (err) { throw err
	} finally { await client.close() }
}

connDB()