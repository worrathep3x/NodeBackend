const { DataTypes } = require('sequelize')
const database = require('../config/db')
class OtherBill {
  constructor() {
    this.model = this.initModel()
  }
  initModel() {
    return database.sequelize.define(
      'otherbill',
      {
        ID: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        Roomid: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        BillName: {
          type: DataTypes.STRING
        },
        Price: {
          type: DataTypes.DECIMAL
        },
        IsDelete: {
          type: DataTypes.BOOLEAN
        }
      },
      {
        tableName: 'otherbills',
        timestamps: false
      }
    )
  }

  getModel() {
    return this.model
  }
}

module.exports = OtherBill
