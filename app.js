'use strict';

const {
    MongoMemoryServer
} = require('mongodb-memory-server');
const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes");
app.use(cors());
app.use(bodyParser.json({
    limit: '50mb'
}));
// set the view engine to ejs
app.set('view engine', 'ejs');

// routes
app.use('/', require('./routes/profile')());
//Web services routes
app.use("/api/", routes);

// start server
const server = app.listen(port, async (err) => {
    if (err)
        console.log("FAIL TO START SERVER ", err);
    //create inmemmory mongodb
    await MongoMemoryServer.create({
        instance: {
            port: process.env.DB_PORT || 63883,
            ip: '127.0.0.1'
        }
    });
    console.log('Express started. Listening on %s', port);
});