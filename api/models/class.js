var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClassSchema = new Schema({
	teacher: { type: Schema.Types.ObjectId, ref: 'Teacher', default: {} },
  students: [{ type: Schema.Types.ObjectId, ref: 'Teacher', default: {}}],
  startTime: { type: Date, default: Date.now}
});

module.exports = mongoose.model('Class', ClassSchema);
