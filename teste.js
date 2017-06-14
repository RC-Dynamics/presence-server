const mongoose = require('./api/config/mongoose');
const config = require('./api/config/config');
const mongo = require('mongoose');
const express = require('./api/config/express');

const db = mongoose();
const app = express();

app.listen(config.port);

console.log('server running at http://localhost:' + config.port);
//
// var student_controller = require('./api/controllers/student.controller');
// var teacher_controller = require('./api/controllers/teacher.controller');
// var lesson_controller = require('./api/controllers/lesson.controller');
//
// student_controller.addStudent({
//   nome: 'Cris',
//   cpf: '1',
//   idCracha: '2'
// });
//
// teacher_controller.addTeacher({
//   nome: 'Roberto',
//   cpf: '3',
//   idCracha: '4'
// });
//
// teacher_controller.findByCPF('3', (teacher) => {
//   lesson_controller.createLesson({
//     teacher: teacher[0],
//     startTime: Date.now(),
//     idThing: '1'
//   });
// });
//
// student_controller.findByCracha('2', (student) => {
//   lesson_controller.addStudent({
//     currTime: Date.now(),
//     idThing: '1',
//     student: student[0]
//   });
// });
