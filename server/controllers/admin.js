/**
 * Created by nqnha on 10/31/2016.
 */
var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/admin', router);
};
router.get('*', function (req, res, next) {
  res.render('admin');
});
