var Teacher = require('mongoose').model('Teacher');

var addTeacher = (_nome, _cpf, _idCracha) => {
  var teacher = new Teacher ();
  teacher.nome = _nome;
  teacher.cpf = _cpf;
  teacher.idCracha = _idCracha;
  teacher.save(function(err){
    if(err) throw err;
  });
}

module.exports = {
  addTeacher
}
