const express = require('express')
const { insertItem, getItemById, deleteById, updateData } = require('./db')
const { ObjectId } = require('mongodb')

const router = express.Router()

// API to add documents to the collection in DB

router.post('/api/v3/app/events', (req, res) => {
    const item = req.body
    console.log(req.body)
    if (item.error) {
        console.log(item.error)
        res.status(400).end()
        return
    }
    insertItem(item)
        .then(() => {
            res.send(item._id)
            res.status(200).end()
        })
        .catch((err) => {
            console.log(err)
            res.status(500).end()
        })
})

// API to get specific document based on its unique _id

router.get('/api/v3/app/events', (req, res) => {
    const id = req.query.id;
    getItemById(id)
        .then((items) => {
            res.json(items)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).end()
        })
})

//API to delete specific document based on _id

router.delete('/api/v3/app/events/:id', (req, res) => {
    var myquery = { _id: new ObjectId(req.params.id) };
    deleteById(myquery).then((result) => {
        if (result.deletedCount === 1) {
            res.send("Successfully deleted one document.");
            res.status(200).end()
        } else {
            res.send("No documents matched the query. Deleted 0 documents.");
            res.status(500).end()
        }
    }
    )


})

//API to update details based on _id

router.patch('/api/v3/app/events/:id', (req, res) => {

    const filter = { _id: new ObjectId(req.params.id) };

    const options = { upsert: true };

    const updates = {
        $set: {
            name: req.body.name, tagline: req.body.tagline,
            schedule: req.body.schedule, description: req.body.description, files: req.body.files,
            moderator: req.body.moderator, category: req.body.category,
            sub_category: req.body.sub_category, rigor_rank: parseInt(req.body.rigor_rank)
        },
    }

    updateData(filter, updates, options)
        .then((result) => {
            res.send(`${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`)
            res.status(200).end()

        })
        .catch((err) => {
            res.send(err)
            res.status(500).end()
        })
})

module.exports = router