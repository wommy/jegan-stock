const client = require("./client")

async function get( collectionName ) {
	await db.collection( collectionName )
		.find().forEach(console.dir)
}

function productCreator( name, materials ) {
	const quantity = [0]
	materials = materials.map( x => ({ 
		name: x, quantity
	}) )
	return { name, quantity, materials }
}

async function post( product, materials ) {
	await db.collection("products")
		.insertOne( productCreator( product, materials ) )
}

async function connDB() {
	try {
		await client.connect()
		db = client.db("jegan")
		await post( "lighter", [ "blank", "art", "laminate", "bag" ] )
		await post( "thank_you", [ "card", "envelope" ] )
		await post( "parcel", [ "mailer", "business_card", "miniprint", "sticker1", "sticker2" ] )
		await get("products")
	} catch (err) { throw err
	} finally { await client.close() }
}

connDB()
// productCreator( "thank_you", ["card","envelope"] )