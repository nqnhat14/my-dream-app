/**
 * Created by My-PC on 9/13/2016.
 */

var express = require('express'),
  router = express.Router(),
  db = require('../models'),
  oauth2 = require('../infras/oauth2'),
  passport = require('passport'),
  topCategoryService = require('../infras/topCategoryService');
module.exports = function (app) {
  app.use('/api', router);
};

router.post('/token', oauth2.token);

router.get('/restrict', passport.authenticate('accessToken', { session: false }), function (req, res) {
  videoQ.getVideoByProgram(1).then(function(video){
    res.send(video);
  },function(err){
    res.send(err)
  });
});
router.post('/message',function(req,res,next){
  var content = req.body.content;
  db.Message.create({
    content:content
  }).then(function(message){
    res.send(message);
  },function(err){
    res.status(500).send(err);
  })
});
router.get('/message',function(req,res,next){
  db.Message.findAll().then(function(messages){
    res.send(messages);
  },function(err){
    res.status(500).send(err);
  })
});
/*ADMIN API*/
router.get('/admin/topCategories',topCategoryService.getTopCategories);
router.post('/admin/topCategories',topCategoryService.createTopCategory);
router.delete('/admin/topCategories/:id',topCategoryService.deleteTopCategory);
router.get('/admin/topCategories/checkNameExist',topCategoryService.checkNameExist);
router.get('/admin/topCategories/:id',topCategoryService.getTopCategory);
router.put('/admin/topCategories',topCategoryService.updateTopCategory);

