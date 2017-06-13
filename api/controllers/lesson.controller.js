var Lesson = require('mongoose').model('Lesson');

var createLesson = (info) => {
  var lesson = new Lesson ();
  lesson.teacher = info.teacher._id;
  lesson.startTime = info.startTime;
  lesson.idThing = info.idThing;
  lesson.endTime = info.startTime + (1000*60*60*3);
  lesson.save((err) => {
    if(err) throw err;
  });
}

var addStudent = (_info) => {
  Lesson.find({idThing: _info.idThing})
  .where('startTime').lte(_info.currTime)
  .where('endTime').gte(_info.currTime), (err, lesson) => {
    if(err) throw err;
    console.log(lesson[0]);
    lesson[0].students.push(_info.student._id);
  };
}

module.exports = {
  createLesson,
  addStudent
}
