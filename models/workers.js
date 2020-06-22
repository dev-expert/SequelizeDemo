'use strict';
module.exports = (sequelize, DataTypes) => {
  const Worker = sequelize.define('Worker', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    bio: DataTypes.STRING,
  }, {});
  Worker.associate = function(models) {
    // associations can be defined here
  };
  return Worker;
};