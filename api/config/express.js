const express = require('express');

module.exports = () => {
  var app = express();

  require('../routes/extension.routes')(app);

  return app;
}
