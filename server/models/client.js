/**
 * Created by My-PC on 9/13/2016.
 */

module.exports = function (sequelize, DataTypes) {

  var Client = sequelize.define('Client', {
    name: DataTypes.STRING,
    clientId: DataTypes.STRING,
    clientSecret: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return Client;
};

