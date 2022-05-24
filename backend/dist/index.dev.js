"use strict";

var express = require('express');

var app = express();

var mongoose = require('mongoose');

var dotenv = require('dotenv');

var routesUrls = require('./routes/routes');

var cors = require('cors');

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function () {
  console.log("mongodb connected");
});
app.use(express.json()); // app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use(cors());
app.use('/app', routesUrls); // app.get('/', (req, res) => {
//     res.send("hello")
// })

app.listen(process.env.PORT || 3000, function () {
  console.log("server is running");
});