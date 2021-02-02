const client = require("./client")

async function get( collectionName ) {
	await db.collection( collectionName )
		.find().forEach(console.dir)
}

function productCreator( name, materialArr ) {
	const quantity = [0]
	const materials = materialArr.map( x => { 
		return { name: x, quantity } 
	} )
	return { name, quantity, materials }
}

async function post( x, y ) {
	await db.collection("products")
		.insertOne( productCreator( x, y ) )
}

async function connDB() {
	try {
		await client.connect()
		db = client.db("jegan")
		await get("products")
		await post( "lighter", [ "blank", "art", "laminate", "bag" ] )
		await get("products")
		await post( "thank_you", [ "card", "envelope" ] )
		await get("products")
		await post( "parcel", [ "mailer", "business_card", "miniprint", "sticker1", "sticker2" ] )
		await get("products")
	} catch (err) { throw err
	} finally { await client.close() }
}

connDB()
// productCreator( "thank_you", ["card","envelope"] )