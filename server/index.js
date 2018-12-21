const express = require('express')
const massive = require('massive')
require('dotenv').config()

const app = express()
app.use(express.json())
const { SERVER_SECRET , CONNECTION_STRING , SERVER_PORT } = process.env

app.get('/api/test' , (req, res) => res.status(200).send('server is responsive'))

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))

