var meshblu = require('./api/config/meshblu');
var config = require('./api/config/config');
var mongoose = require('./api/config/mongoose');
var mqtt = require('./api/config/mqtt');

// Initializing the data base
var db = mongoose();

// Initializing the communication with the Knot Cloud
var mesh = meshblu();

// Initializing the mqtt communication
// var comm = mqtt();

// Adding a new student
// var controller = require('./api/controllers/student.controller');
// controller.addStudent('ACris', '43313', '134311');
