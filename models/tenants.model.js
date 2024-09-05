module.exports = (sequelize, Sequelize) => {
    const Tenants = sequelize.define("tenants", {
      ID: {
        type: Sequelize.INTEGER,
        primaryKey: true, // กำหนดให้ jobID เป็น primary key
        allowNull: false,
        autoIncrement: true // หากต้องการให้มีการเพิ่มค่าของ primary key อัตโนมัติ
      },
      Firstname: {
        type: Sequelize.STRING
      },
      Lastname: {
        type: Sequelize.STRING
      },
      IDcard: {
        type: Sequelize.STRING
      },
      Phone: {
        type: Sequelize.INTEGER
      },
      Address: {
        type: Sequelize.STRING
      },
      Status: {
        type: Sequelize.BOOLEAN
      },
      IsDelete:{
        type: Sequelize.BOOLEAN
      },
    }, {
      timestamps: false // ปิดการใช้งาน createdAt และ updatedAt
    });
  
    return Tenants;
  };
  