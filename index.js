const MongoClient = require('mongodb').MongoClient;
require('dotenv').config()

const uri = `mongodb+srv://${process.env.DB}?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function findAllProducts() {
  try {
    await client.connect()
    await client.db("stock").collection("products")
      .find()    
      .forEach(console.dir)
  } catch (error) {
    console.error(error)
  } finally {
    await client.close()
  }
}

findAllProducts()