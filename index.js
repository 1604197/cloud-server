const express = require('express')
const cors = require('cors')
require('dotenv').config(); 

const app = express()
app.use(express.json())
app.use(cors())


//GET -> keep server on render alive
app.get('/upload', async (request, response) =>{
    response.status(200).send(process.env.LAMBDA_UP)
})

app.get('/upload-large', async (request, response) =>{
    response.status(200).send(process.env.LAMBDA_UP_LARGE)
})

app.get('/download', async (request, response) =>{
    response.status(200).send(process.env.LAMBDA_DOWN)
})

const PORT = 3001
app.listen(PORT, ('0.0.0.0') =>{ 
    console.log('Server running on port ' + PORT)
})

