const mongoose = require('./api/config/mongoose');
const config = require('./api/config/config');
const mongo = require('mongoose');
const express = require('./api/config/express');
const mqtt = require('./api/config/mqtt');

const db = mongoose();
const app = express();
const comm = mqtt();

var port = process.env.PORT || config.port;

app.listen(port);
console.log('server running at http://localhost:' + port);
//
// var student_controller = require('./api/controllers/student.controller');
// var teacher_controller = require('./api/controllers/teacher.controller');
// var lesson_controller = require('./api/controllers/lesson.controller');

// student_controller.addStudent({
//   nome: 'Roberto',
//   cpf: '1',
//   idCracha: '9717754'
// });
//
// teacher_controller.addTeacher({
//   nome: 'Lucas',
//   cpf: '2',
//   idCracha: 'fdd8a7e5'
// });
//
// teacher_controller.addTeacher({
//   nome: 'Renato',
//   cpf: '3',
//   idCracha: '264ed848'
// });

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
