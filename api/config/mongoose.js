var config = require('./config'),
	mongoose = require('mongoose');

module.exports = function() {
	mongoose.Promise = global.Promise;
	var uri = process.env.MONGODB_URI || config.db;
	var db = mongoose.connect(uri);

	// CONNECTION EVENTS
	// When successfully connected
	db.connection.on('connected', function () {
		console.log('Mongoose default connection open to ' + uri);
	});

	// If the connection throws an error
	db.connection.on('error',function (err) {
		console.log('Mongoose default connection error: ' + err);
	});

	// When the connection is disconnected
	db.connection.on('disconnected', function () {
		console.log('Mongoose default connection disconnected');
	});

	// When the connection is disconnected
	db.connection.on('open', function () {
		console.log('Mongoose default connection is open');
	});

	//Adding Schemas to DB
	require('../models/student');

	require('../models/teacher');

	require('../models/lesson');

	return db;
};
