"use strict";

require("dotenv").config();
const { MongoClient } = require("mongodb");

// MongoDB connection URL with authentication options
const url = process.env.MONGO_URL;
let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }

    const client = new MongoClient(url);
    await client.connect();
    dbInstance = client.db(dbName);
    return dbInstance;
}

module.exports = connectToDatabase;