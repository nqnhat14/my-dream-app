/**
 * Created by My-PC on 9/13/2016.
 */
module.exports = function (sequelize, DataTypes) {

  var User = sequelize.define('User', {
    userName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return User;
};
