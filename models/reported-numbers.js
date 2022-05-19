'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reportedNumbers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.reportedNumbers.hasMany(models.index, {foreignKey: 'userID'})
    }
  }
  reportedNumbers.init({
    ID: DataTypes.STRING,
    userID: DataTypes.INTEGER,
    Number: DataTypes.INTEGER,
    isScam: DataTypes.BOOLEAN,
    Comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reported-numbers',
  });
  return reportedNumbers;
};