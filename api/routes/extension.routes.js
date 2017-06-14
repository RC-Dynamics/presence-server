const lesson = require('../controllers/lesson.controller');

module.exports = (app) => {
  app.route('/lesson/listByCpf').get(lesson.listByCpf);
}
