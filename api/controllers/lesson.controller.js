var Lesson = require('mongoose').model('Lesson');

var createLesson = (info) => {
  var lesson = new Lesson ();
  lesson.teacher = info.teacher;
  lesson.startTime = info.startTime;
  lesson.idThing = info.idThing;
  lesson.endTime = info.startTime + (1000*60*60*3);
  lesson.save((err) => {
    if(err) throw err;
  });
}

var addStudent = (_info) => {
  Lesson.find({id: _info.idThing})
  .where('startTime').lte(_info.currTime)
  .where('endTime').gte(_info.currTime)
  .exec((err, lesson) => {
    lesson.students.push(_info.student);
  });
}

module.exports = {
  createLesson,
  addStudent
}
