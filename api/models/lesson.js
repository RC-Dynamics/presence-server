var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LessonSchema = new Schema({
	teacher: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true },
  students: [{ type: Schema.Types.ObjectId, ref: 'Student'}],
  startTime: { type: Date, default: Date.now(), required: true },
	endTime: { type: Date, default: Date.now(), required: true },
	idThing: {type: Number, required: true }
});

module.exports = mongoose.model('Lesson', LessonSchema);
