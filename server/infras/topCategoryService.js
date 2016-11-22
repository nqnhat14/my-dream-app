/**
 * Created by nqnha on 11/14/2016.
 */
var db = require('../models')
module.exports = {
  getTopCategories: function (req, res, next) {
    db.TopCategory.findAll().then(function (data) {
      res.send(data);
    }, function (err) {
      res.status(500).send(err);
    })
  },
  deleteTopCategory: function (req, res, next) {
    var topCategoryId = req.params.id;
    db.TopCategory.destroy({where: {id: topCategoryId}}).then(function () {
      res.send();
    }, function (err) {
      res.status(500).send(err);
    })
  },
  createTopCategory: function (req, res, next) {
    var topCategory = req.body;
    db.TopCategory.create(topCategory).then(function (data) {
      res.send(data)
    }).catch(function (error) {
      res.status(500).send(err);
    })
  },
  getTopCategory: function (req, res, next) {
    var topCategoryId = req.params.id;
    db.TopCategory.findOne({where: {id: topCategoryId}}).then(function (data) {
      res.send(data);
    }, function (err) {
      res.status(500).send(err);
    })
  },
  updateTopCategory: function (req, res, next) {
    var topCategory = req.body;
    db.TopCategory.findOne({where: {id: topCategory.id}}).then(function (data) {
      db.TopCategory.update({name: topCategory.name}, {where: {id: data.id}}).then(function (result) {
        res.send(result);
      }, function (error2) {
        res.status(500).send(error2);
      })
    }, function (error1) {
      res.status(500).send(error1);
    });
  },
  checkNameExist: function (req, res, next) {
    var name = req.query.name;
    var id = req.query.id;
    db.TopCategory.findOne(
      {
        where: {
          id: {
            $ne:id
          },
          name: name
        }
      }).then(function (result) {
      if (result)
        res.send(true);
      else
        res.send(false);
    }, function (err) {
      res.status(500).send(err);
    })
  }

}
