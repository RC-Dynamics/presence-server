var Student = require('mongoose').model('Student');

var addStudent = (_nome, _cpf, _idCracha) => {
  var student = new Student ();
  student.nome = _nome;
  student.cpf = _cpf;
  student.idCracha = _idCracha;
  student.save(function(err){
    if(err) throw err;
  });
}

module.exports = {
  addStudent
}
