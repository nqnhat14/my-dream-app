/**
 * Created by My-PC on 9/13/2016.
 */
module.exports = function (sequelize, DataTypes) {

  var AccessToken = sequelize.define('AccessToken', {
    token: DataTypes.STRING,
    expirationDate: DataTypes.DATE,
    clientId: DataTypes.STRING,
    userId: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return AccessToken;
};

