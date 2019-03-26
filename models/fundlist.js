'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fundlist = sequelize.define('Fundlist', {
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    category: DataTypes.STRING,
    risk: DataTypes.STRING,
    yeara: DataTypes.FLOAT,
    yearb: DataTypes.FLOAT,
    yearc: DataTypes.FLOAT,
    yeard: DataTypes.FLOAT,
    yeare: DataTypes.FLOAT
  }, {
    underscored: true,
  });
  Fundlist.associate = function(models) {
    // associations can be defined here
  };
  return Fundlist;
};