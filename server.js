const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.listen(PORT,()=> console.log(`Server running on port: http://localhost${PORT}`))
