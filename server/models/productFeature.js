/**
 * Created by My-PC on 10/27/2016.
 */
module.exports = function (sequelize, DataTypes) {

  var ProductFeature = sequelize.define('ProductFeature', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    productId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return ProductFeature;
};
