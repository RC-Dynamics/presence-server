var student_controller = require('../controllers/student.controller');
var teacher_controller = require('../controllers/teacher.controller');
var lesson_controller = require('../controllers/lesson.controller');

var handleNewIdRead = (client, idCracha, idThing, currTime) => {
  // If it was read a teacher
  teacher_controller.findByCracha(idCracha, (teacher) => {
    if (teacher) {
      console.log(`Professor: ${teacher.nome}`);
      lesson_controller.findCurrLesson({
        idThing,
        currTime
      }, (lesson) => {
        // If it is happenning any class in this time
        if(lesson){
          // If this class it was started by the same teacher read now
          // End the lesson
          if(lesson.teacher.idCracha === idCracha){
            lesson_controller.endLesson(lesson, currTime);
            console.log(`Aula finilizada: ${lesson.startTime}`);
          }
          // If this class it was started by a different teacher
          // End the current class and start a new one
          else {
            lesson_controller.endLesson(lesson, currTime);
            lesson_controller.createLesson({
              teacher,
              startTime: currTime + 1,
              idThing
            });

            console.log(`Aula finilizada: ${lesson.startTime} - ${lesson.teacher.nome}`);
            console.log(`Aula iniciada  : ${lesson.startTime} - ${teacher.nome}`);
          }
        }
        // If there isnt started any class in the current time
        else {
          lesson_controller.createLesson({
            teacher,
            startTime: currTime,
            idThing
          });

          console.log(`Aula iniciada: ${currTime} - ${teacher.nome}`);
        }
      });
    }
  });

  // If it was read a student
  student_controller.findByCracha(idCracha, (student) => {
    if(student){
      console.log(`Aluno: ${student.nome}`);
      lesson_controller.findCurrLesson({
        idThing,
        currTime: currTime
      }, (lesson) => {
        // If it is happenning any class in this time
        if(lesson) {
          lesson_controller.addStudent(lesson, student);
          console.log('Aluno adicionado');
        }
        // If there isnt started any class in the current time/
        else {
          client.publish('ChamadaRFID/UFPE/CIn/Sala_1_SUB', 'true');
          console.log('Aluno não adicionado');
        }
      });
    }
  });
}
module.exports = {
  handleNewIdRead
}
