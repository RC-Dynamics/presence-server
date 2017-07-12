const mqtt = require('mqtt');

module.exports = () => {
  const client = mqtt.connect('mqtt://iot.eclipse.org');
  var mqtt_controller = require('../controllers/mqtt.controller');

  client.on('connect', () => {
    client.subscribe('ChamadaRFID/UFPE/CIn/Sala_1_PUB');
    client.publish('ChamadaRFID/UFPE/CIn/Sala_1_SUB', 'true');
  });

  client.on('message', (topic, message) => {
    if(topic === 'ChamadaRFID/UFPE/CIn/Sala_1_PUB') {
      var idThing = 'Sala_1';
      var idCracha = message.toString();
      var currTime = Date.now(); // SEND IN THE MESSAGE OR GET WHEN ARRIVE??????
      mqtt_controller.handleNewIdRead(client, idCracha, idThing, currTime);
    }
  });

  return client;
}
