var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
	cpf: { type: String, unique: true },
	nome: {type: String },
	idCracha: { type: String, unique: true }
});

module.exports = mongoose.model('Student', StudentSchema);
