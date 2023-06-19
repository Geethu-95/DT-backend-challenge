const { MongoClient, ObjectId } = require('mongodb')
require('dotenv').config();

const connectionUrl = process.env.ATLAS_URI
const dbName = 'events'

let db

const init = () =>
    MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then((client) => {
        db = client.db(dbName)
    })

const insertItem = (item) => {
    const collection = db.collection('events')
    return collection.insertOne(item)
}

const getItemById = (id) => {
    const collection = db.collection('events')
    return collection.find({ _id: new ObjectId(id) }).toArray()
}

const deleteById = (myq) => {
    const collection = db.collection('events')
    const result = collection.deleteOne(myq)
    return result;
}

const updateData = (filter, body, options) => {
    const collection = db.collection('events')
    const result = collection.updateOne(filter, body, options)
    return result;
}

module.exports = { init, insertItem, getItemById, deleteById, updateData }
