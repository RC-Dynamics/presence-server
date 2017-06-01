var MeshbluSocketIO = require('meshblu');
var meshblu = new MeshbluSocketIO({
   resolveSrv: false,
   protocol: "ws",
   hostname: "knot-test.cesar.org.br",
   port: "3000",
   uuid: "a68651e1-7bce-45f2-83ed-a0871ddb0000",    // user
   token: "17bdaa1bd4cd50b1cadcce315e84f6ab40fedc76",
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
          "uuid": "caec387f-493e-4af6-b4e2-e34406410001", //thing uuid

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
