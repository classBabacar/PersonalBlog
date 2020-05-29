
async function startProcess() {
    await conn.connect();
}

require('dotenv').config();
const DB_URL= process.env.DB_URL;

const { MongoClient } = require('mongodb');
const conn = new MongoClient(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
startProcess()

module.exports = {
    conn
}
