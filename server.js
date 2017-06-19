// const meshblu = require('./api/config/meshblu');
const config = require('./api/config/config');
const mongoose = require('./api/config/mongoose');
// const mqtt = require('./api/config/mqtt');
const express = require('./api/config/express');

// Initializing the data base
var db = mongoose();

// Initializing the communication with the Knot Cloud
// var mesh = meshblu();

// Initializing the express app
var app = express();
app.listen(config.port);
console.log('server running at http://localhost:' + config.port);

// Initializing the mqtt communication
// var comm = mqtt();

// Adding a new student
// var controller = require('./api/controllers/student.controller');
// controller.addStudent('ACris', '43313', '134311');
