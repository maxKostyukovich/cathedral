'use strict';
module.exports = (sequelize, DataTypes) => {
  const Gallery = sequelize.define('Gallery', {
    title: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Gallery.associate = function(models) {
    // associations can be defined here
  };
  return Gallery;
};