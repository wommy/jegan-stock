const client = require("./client")

async function get( collectionName ) {
	await db.collection( collectionName )
		.find().forEach(console.dir)
}

async function postProduct() {
	await db.collection("products")
		.insertOne({
			thank_you: { 
				quantity: [0], 
				materials: { 
					card: { quantity: [0] },
					envelope: { quantity: [0] }
				}
			}
		})
}

async function connDB() {
	try {
		await client.connect()
		db = client.db("jegan")
		await get("products")
		await postProduct()
		await get("products")
	} catch (err) { throw err
	} finally { await client.close() }
}

connDB()