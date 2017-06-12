var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeacherSchema = new Schema({
	cpf: { type: String, unique: true },
	nome: {type: String, },
	idCracha: { type: String, unique: true }
});

module.exports = mongoose.model('Teacher', TeacherSchema);
