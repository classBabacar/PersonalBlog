
const client =  require('../models/database').conn

async function listDatabases(client){
  databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

async function getFoods() {
    await listDatabases(client);

    const dbName = "blog_collection";
    const db = client.db(dbName);
    const col = db.collection("blogs");
  
    const cursor = db.collection('blogs').find({"first":"Bob"});
    // console.log(cursor)
    
    return personDocument = {
      "first": "Bob",
      "last": "Doe" 
    }
    // const p = await col.insertOne(personDocument);

    // return p
}

module.exports = {
    getFoods
}