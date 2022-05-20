'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reportedNumbers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {model: 'users',
        key: 'id'
        }
      },
      Number: {
        type: Sequelize.STRING,
      },
      isScam: {
        type: Sequelize.BOOLEAN,
        default:false
      },
      Comments: {
        type: Sequelize.STRING(1000)
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reportedNumbers');
  }
};