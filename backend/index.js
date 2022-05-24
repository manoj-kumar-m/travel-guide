const express = require('express');
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()
mongoose.connect(process.env.DATABASE_ACCESS , { useNewUrlParser: true, useUnifiedTopology: true},() => {
    console.log("mongodb connected")
})

app.use(express.json())
// app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())
app.use('/app',routesUrls)

// app.get('/', (req, res) => {
//     res.send("hello")
// })
app.listen(process.env.PORT || 3000, () => {
    console.log("server is running")
    
})                 