/**
 * Created by My-PC on 10/27/2016.
 */
module.exports = function (sequelize, DataTypes) {

  var AnonymousBasket = sequelize.define('AnonymousBasket', {
    cartId: DataTypes.STRING,
    productId: DataTypes.INTEGER,
    Quantity: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return AnonymousBasket;
};
