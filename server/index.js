const express = require('express')
const app = express()
const axios = require('axios')
const bodyParser = require('body-parser')
const massive = require('massive')
const controller = require('./controller')

require('dotenv').config()

app.use(bodyParser.json())
const port = process.env.PORT || 3004

app.get('/api/inventory', controller.getAll)
app.post('/api/inventory', controller.create)
app.put('/api/inventory/:id', controller.update)
app.delete('/api/inventory/:id', controller.removeProduct)

massive(process.env.CONNECTION_STRING).then(db => {
  app.set('db', db)
})
app.listen(port, () => console.log(`marcooooo.. polo @ port: ${port}`))
