var Teacher = require('mongoose').model('Teacher');
const _ = require('lodash');

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
    if(!_.isEmpty(teacher[0])){
      callback(teacher[0]);
    }
    else{
      callback(undefined);
    }
  });
}

var findByCracha = (_cracha, callback) => {
  Teacher.find({idCracha: _cracha}, (err, teacher) => {
    if (err){
      throw err;
    }
    if(!_.isEmpty(teacher[0])){
      callback(teacher[0]);
    }
    else{
      callback(undefined);
    }
  });
}

module.exports = {
  addTeacher,
  findByCPF,
  findByCracha
}
