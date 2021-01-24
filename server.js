const express = require('express')
const bodyParser = require('body-parser')
const usersRouters = require('./routers/users.js')

const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.use('/users', usersRouters)

app.listen(PORT,()=> console.log(`Server running on port: http://localhost${PORT}`))
