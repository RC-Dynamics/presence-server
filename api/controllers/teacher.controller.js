var Teacher = require('mongoose').model('Teacher');

var addTeacher = (_teacher) => {
  var teacher = new Teacher ();
  teacher.nome = _teacher.nome;
  teacher.cpf = _teacher.cpf;
  teacher.idCracha = _teacher.idCracha;
  teacher.save(function(err){
    if(err) throw err;
  });
}

var findByCPF = (_cpf, callback) => {
  Teacher.find({cpf: _cpf}, (err, teacher) => {
    if (err){
      throw err;
    }
    callback(teacher);
  });
}

var findByCracha = (_cracha, callback) => {
  Teacher.find({idCracha: _cracha}, (err, teacher) => {
    if (err){
      throw err;
    }
    callback(teacher);
  });
}

module.exports = {
  addTeacher,
  findByCPF,
  findByCracha
}
