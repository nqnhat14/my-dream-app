/**
 * Created by My-PC on 10/27/2016.
 */
module.exports = function (sequelize, DataTypes) {

  var ProductImage = sequelize.define('ProductImage', {
    name: DataTypes.STRING,
    size: DataTypes.STRING,
    picture: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    productId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return ProductImage;
};
