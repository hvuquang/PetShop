const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const accountRouter = require('./routes/Acocunt')

const app = express();
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))

mongoose.connect(process.env.mongodb_connect_url).then(()=>console.log("Connected Database"))

app.use('/v1/account',accountRouter)

app.listen(8000,()=>{
    console.log('Server running on port 8000');
})