/**
 * Created by My-PC on 10/27/2016.
 */
module.exports = function (sequelize, DataTypes) {

  var Feature = sequelize.define('Feature', {
    description: DataTypes.STRING,
    picture: DataTypes.STRING,
    active: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return Feature;
};
