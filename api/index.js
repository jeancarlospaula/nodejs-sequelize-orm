const express = require('express')
const routes = require('./routes')

const app = express()

routes(app)

const port = process.env.port || 3000

app.listen(port, ()=>{console.log('Server Active on PORT: '+port)})

module.exports = app