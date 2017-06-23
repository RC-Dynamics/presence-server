var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LessonSchema = new Schema({
	teacher: {
		cpf: {type: String, required: true},
		nome: {type: String, required: true},
		idCracha: {type: String, required: true},
		_id: {type: Schema.Types.ObjectId, ref: 'Teacher'}
	},
  students: [{
		cpf: {type: String, required: true},
		nome: {type: String, required: true},
		idCracha: {type: String, required: true},
		_id: {type: Schema.Types.ObjectId, ref: 'Student'}
	}],
  startTime: { type: Date, default: Date.now(), required: true },
	endTime: { type: Date, default: Date.now(), required: true },
	idThing: {type: String, required: true }
});

module.exports = mongoose.model('Lesson', LessonSchema);
