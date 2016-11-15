/**
 * Created by My-PC on 10/27/2016.
 */
module.exports = function (sequelize, DataTypes) {

  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    longDescription: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL,
    cost: DataTypes.DECIMAL,
    picture: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    active: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return Product;
};
