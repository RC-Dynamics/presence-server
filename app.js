
var meshblu = require('./api/config/meshblu');
var config = require('./api/config/config');
var mongoose = require('./api/config/mongoose');

// Initializing the data base
var db = mongoose();
// Initializing the communication with the Knot Cloud
var mesh = meshblu();
