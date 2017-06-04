var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StudentSchema = new Schema({
	cpf: { type: String, unique: true, trim: true },
	nome: {type: String, trim: true},
	idCracha: { type: String, unique: true, trim: true }
});

module.exports = mongoose.model('Student', StudentSchema);
