/**
 * Created by My-PC on 9/13/2016.
 */
module.exports = function (sequelize, DataTypes) {

  var RefreshToken = sequelize.define('RefreshToken', {
    token: DataTypes.STRING,
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

  return RefreshToken;
};
