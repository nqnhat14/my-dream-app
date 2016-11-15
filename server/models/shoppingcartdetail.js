/**
 * Created by My-PC on 10/27/2016.
 */
module.exports = function (sequelize, DataTypes) {

  var ShoppingCartDetail = sequelize.define('ShoppingCartDetail', {
    quantity: DataTypes.INTEGER,
    unitPrice: DataTypes.DECIMAL,
    productId: DataTypes.INTEGER,
    shoppingCartId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return ShoppingCartDetail;
};
