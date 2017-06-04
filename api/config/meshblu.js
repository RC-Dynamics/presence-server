var MeshbluSocketIO = require('meshblu');
var config = require('./config');

module.exports = () => {
  var meshblu = new MeshbluSocketIO({
     resolveSrv: false,
     protocol: "ws",
     hostname: config.cesar_server,
     port: "3000",
     uuid: config.user_uuid,    // user
     token: config.user_token
  })//usr uuid and token

  meshblu.on('ready', function () {
     console.log('Ready to rock');

  //   meshblu.devices({    // 1
  //           "gateways": ["*"] // gw uuid
  //       }, function (result) {
  //           console.log('Devices:');
  //           console.log(JSON.stringify(result, null, 2));
  //       })
    meshblu.update({ // 2
            "uuid": config.thing_uuid, //thing uuid

            "set_data": [{
              "sensor_id":1,
              "value":true
            }]
    }, function (result) {
            console.log('update');
            console.log(JSON.stringify(result, null, 2));
        });

  });

  meshblu.on('notReady', function () {
     console.log('Connection not authorized');
  });

  meshblu.connect();
  return meshblu;
}
