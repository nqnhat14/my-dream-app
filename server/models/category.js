/**
 * Created by My-PC on 10/27/2016.
 */
module.exports = function (sequelize, DataTypes) {

  var Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    topCategoryId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    longDescription: DataTypes.STRING,
    picture: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // example on how to add relations
        // Article.hasMany(models.Comments);
      }
    }
  });

  return Category;
};
