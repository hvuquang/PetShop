const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const cors = require('cors')
const accountRouter = require('./routes/Acocunt')
const flavourRouter = require('./routes/Flavour')
const sizeRouter = require('./routes/Size')
const foodRouter = require('./routes/Food')
const petRouter = require('./routes/Pet')
const serviceRouter = require('./routes/Service')
const accessoryRouter = require('./routes/Accessory')
const colorRouter = require('./routes/Color')

const app = express();
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))

mongoose.connect(process.env.mongodb_connect_url).then(()=>console.log("Connected Database"))

app.use('/v1/account',accountRouter)
app.use('/v1/flavour',flavourRouter)
app.use('/v1/size',sizeRouter)
app.use('/v1/food',foodRouter)
app.use('/v1/pet',petRouter)
app.use('/v1/service',serviceRouter)
app.use('/v1/accessory', accessoryRouter)
app.use('/v1/color', colorRouter)

app.listen(8000,()=>{
    console.log('Server running on port 8000');
})