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

var findByCPF = (_cpf, callback) => {
  Student.find({cpf: _cpf}, (err, student) => {
    if (err){
      throw err;
    }
    callback(student);
  });
}

var findByCracha = (_cracha, callback) => {
  Student.find({idCracha: _cracha}, (err, student) => {
    if (err){
      throw err;
    }
    callback(student);
  });
}

module.exports = {
  addStudent,
  findByCPF,
  findByCracha
}
