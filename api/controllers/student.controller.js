var Student = require('mongoose').model('Student');

var addStudent = (_student) => {
  var student = new Student ();
  student.nome = _student.nome;
  student.cpf = _student.cpf;
  student.idCracha = _student.idCracha;
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
