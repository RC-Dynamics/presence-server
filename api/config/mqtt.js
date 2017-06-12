const mqtt = require('mqtt');
var student_controller = require('./api/controllers/student.controller');
var teacher_controller = require('./api/controllers/teacher.controller');
var class_controller = require('./api/controllers/class.controller');

module.exports = () => {
  const client = mqtt.connect('') // NEED TO DEFINE THE URL

  client.on('connect', () => {
    client.subscribe('') // NEED TO DEFINE THE TOPIC'S NAME == NEW READ
  })

  client.on('message', (topic, message) => {
    if(topic === '') { // NEW READ

    }
  })
}
