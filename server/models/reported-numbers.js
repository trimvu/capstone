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
      models.users.hasMany(models.reportedNumbers, {foreignKey: 'userID'})
    }
  }
  reportedNumbers.init({
    userID: DataTypes.INTEGER,
    Number: DataTypes.INTEGER,
    isScam: DataTypes.BOOLEAN,
    Comments: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'reportedNumbers',
  });
  return reportedNumbers;
};