var Class = require('mongoose').model('Class');

var creatClass = (_teacher, _startTime, _id) => {
  var _class = new Class();
  _class.teacher = _teacher;
  _class.startTime = _startTime;
  _class.id = _id;
  _class.endTime = _startTime + (1000*60*60*3);
  _class.save((err) => {
    if(err) throw err;
  });
}

var addStudent = (_currTime, _id, _student) => {
  Class.find({id: _id})
  .where('startTime').lte(_currTime)
  .where('endTime').gte(_currTime)
  .exec((err, _class) => {
    _class.students.push(_student);
  });
}

module.exports = {
  creatClass,
  addStudent
}
