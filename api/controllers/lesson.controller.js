var Lesson = require('mongoose').model('Lesson');

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

var addStudent = (info) => {
  Lesson.find({idThing: info.idThing})
  .where('startTime').lte(info.currTime)
  .where('endTime').gte(info.currTime)
  .exec((err, lesson) => {
    if(err) throw err;
    lesson[0].students.push({
      cpf: info.student.cpf,
      nome: info.student.nome,
      idCracha: info.student.idCracha,
      _id: info.student._id
    });
    lesson[0].save((err) => {
      if (err) throw err;
    });
  });
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

module.exports = {
  createLesson,
  addStudent,
  listByCpf
}
