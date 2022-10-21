require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 9000
const creatingRoute = require('./routes/create.routes')


app.use(bodyParser.json())
app.use(creatingRoute)


app.get('/', (req, res) => {
    res.status(200).json({
        message:"Hello World"
    })
})







app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})