'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fundlist = sequelize.define('Fundlist', {
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    category: DataTypes.STRING,
    risk: DataTypes.STRING,
    2018: DataTypes.FLOAT,
    2017: DataTypes.FLOAT,
    2016: DataTypes.FLOAT,
    2015: DataTypes.FLOAT,
    2014: DataTypes.FLOAT
  }, {
    underscored: true,
  });
  Fundlist.associate = function(models) {
    // associations can be defined here
  };
  return Fundlist;
};