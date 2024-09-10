const { DataTypes } = require('sequelize')
const database = require('../config/db')
class Product {
  constructor() {
    this.model = this.initModel()
  }
  initModel() {
    return database.sequelize.define(
      'product',
      {
        jobID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        jobDept: {
          type: DataTypes.STRING
        },
        name: {
          type: DataTypes.STRING
        },
        description: {
          type: DataTypes.STRING
        },
        salary_range: {
          type: DataTypes.STRING
        }
      },
      {
        tableName: 'products',
        timestamps: false
      }
    )
  }

  getModel() {
    return this.model
  }
}

module.exports = Product
