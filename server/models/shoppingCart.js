/**
 * Created by My-PC on 10/27/2016.
 */
module.exports = function (sequelize, DataTypes) {

  var ShoppingCart = sequelize.define('ShoppingCart', {
    shippingAddress: DataTypes.STRING,
    contactPerson: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    shippingCost: DataTypes.DECIMAL,
    purchaseDate: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return ShoppingCart;
};
