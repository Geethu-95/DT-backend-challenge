const express = require('express')
const bodyParser = require('body-parser')
const { init } = require('./db')
const routes = require('./routes')

const app = express()
app.use(bodyParser.json())
app.use(routes)

init().then(() => {
  app.listen(3000)
  console.log('Server running on port 3000')
})