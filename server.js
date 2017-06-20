// const meshblu = require('./api/config/meshblu');
const config = require('./api/config/config');
const express = require('./api/config/express');
const mongoose = require('./api/config/mongoose');
const mqtt = require('./api/config/mqtt');

var port = process.env.PORT || config.port;

// Initializing the data base
var db = mongoose();

// Initializing the communication with the Knot Cloud
// var mesh = meshblu();

// Initializing the express app
var app = express();

app.listen(port);
console.log('server running at http://localhost:' + port);

var comm = mqtt();

// Initializing the mqtt communication
// var comm = mqtt();

// Adding a new student
// var controller = require('./api/controllers/student.controller');
// controller.addStudent('ACris', '43313', '134311');
