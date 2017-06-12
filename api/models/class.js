var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClassSchema = new Schema({
	teacher: { type: Schema.Types.ObjectId, ref: 'Teacher', default: {}, required: true },
  students: [{ type: Schema.Types.ObjectId, ref: 'Teacher', default: {}}],
  startTime: { type: Date, default: Date.now, required: true },
	endTime: { type: Date, default: Date.now, required: true },
	id: {type: Number, required: true }
});

module.exports = mongoose.model('Class', ClassSchema);
