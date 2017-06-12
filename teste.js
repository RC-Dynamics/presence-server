const mongoose = require('./api/config/mongoose');

const db = mongoose();

var student_controller = require('./api/controllers/student.controller');
var teacher_controller = require('./api/controllers/teacher.controller');
var lesson_controller = require('./api/controllers/lesson.controller');

student_controller.addStudent({
  nome: 'Cris',
  cpf: '1',
  idCracha: '2'
});

teacher_controller.addTeacher({
  nome: 'Roberto',
  cpf: '3',
  idCracha: '4'
});

teacher_controller.findByCPF('3', (myTeacher) => {
  console.log(mongoose.Types.ObjectId(myTeacher[0]));
  lesson_controller.createMyClass({
    teacher: mongoose.Types.ObjectId(myTeacher[0]),
    startTime: Date.now(),
    idThing: '1'
  });
});

// student_controller.findByCracha('2', (_student) => {
//   console.log(JSON.stringify(_student[0], undefined, 2));
//   lesson_controller.addStudent({
//     currTime: Date.now(),
//     idThing: '1',
//     student: _student[0]
//   });
// });
