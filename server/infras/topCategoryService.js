/**
 * Created by nqnha on 11/14/2016.
 */
var db = require('../models')
module.exports = {
  getTopCategories:function(req,res,next){
    db.TopCategory.findAll().then(function(data){
      res.send(data);
    },function(err){
      res.status(500).send(err);
    })
  },
  deleteTopCategory:function(req,res,next){
    var topCategoryId = req.params.id;
    db.TopCategory.destroy({where:{id:topCategoryId}}).then(function(){
      res.send();
    },function(err){
      res.status(500).send(err);
    })
  }
}
