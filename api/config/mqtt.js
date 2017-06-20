const mqtt = require('mqtt');

module.exports = () => {
  const client = mqtt.connect('mqtt://iot.eclipse.org');

  var student_controller = require('../controllers/student.controller');
  var teacher_controller = require('../controllers/teacher.controller');
  var lesson_controller = require('../controllers/lesson.controller');

  client.on('connect', () => {
    client.subscribe('ChamadaRFID/UFPE/CIn/Sala_1_PUB');
  })

  client.on('message', (topic, message) => {
    if(topic === 'ChamadaRFID/UFPE/CIn/Sala_1_PUB') {
      console.log(message.toString());
    }
  })
}
