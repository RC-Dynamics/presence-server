var Lesson = require('mongoose').model('Lesson');
const _ = require('lodash');

var createLesson = (info) => {
  var lesson = new Lesson ();
  lesson.teacher = {
    cpf: info.teacher.cpf,
    nome: info.teacher.nome,
    idCracha: info.teacher.idCracha,
    _id: info.teacher._id
  };
  lesson.startTime = info.startTime;
  lesson.idThing = info.idThing;
  lesson.endTime = info.startTime + (1000*60*60*3);
  lesson.save((err) => {
    if(err) throw err;
  });
}

var addStudent = (lesson, student) => {
  // Find if this student already is in this lesson
  var foundStudent = lesson.students.filter((_student) => student.cpf === _student.cpf);
  // If didnt found thid student in this lesson, insert
  if(foundStudent.length === 0){
    lesson.students.push({
      cpf: student.cpf,
      nome: student.nome,
      idCracha: student.idCracha,
      _id: student._id
    });
    lesson.save((err) => {
      if (err) throw err;
    });
  }
}

var listByCpf = (req, res) => {
  Lesson.find( {'teacher.cpf': req.query.cpf } , (err, lessons) => {
    if(err){
			res.status(404).json(err);
			return;
    }

    if(!lessons){
      req.status(401).json({
				success: false,
				message: 'Lessons not found.'
      });
    } else {
      res.status(200).json(lessons);
    }
  });
}

var findCurrLesson = (info, callback) => {
  Lesson.find({idThing: info.idThing})
  .where('startTime').lte(info.currTime)
  .where('endTime').gte(info.currTime)
  .exec((err, lesson) => {
    if(err) throw err;
    if (!_.isEmpty(lesson[0])) {
      callback(lesson[0]);
    }
    else {
      callback(undefined);
    }
  });
}

var endLesson = (lesson, endTime) => {
  lesson.endTime = endTime;
  lesson.save((err) => {
    if(err) throw err;
  });
}

module.exports = {
  createLesson,
  addStudent,
  listByCpf,
  findCurrLesson,
  endLesson
}
