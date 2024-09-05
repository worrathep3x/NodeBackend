module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define("room", {
      ID: {
        type: Sequelize.INTEGER,
        primaryKey: true, // กำหนดให้ jobID เป็น primary key
        allowNull: false,
        autoIncrement: true // หากต้องการให้มีการเพิ่มค่าของ primary key อัตโนมัติ
      },
      TenantsID: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      RoomNumber: {
        type: Sequelize.INTEGER
      },
      TypeRoom: {
        type: Sequelize.STRING
      },
      Overdue: {
        type: Sequelize.BOOLEAN
      },
      DateSigin: {
        type: Sequelize.DATE
      },
      DateCheckout: {
        type: Sequelize.DATE
      },
      Note: {
        type: Sequelize.STRING
      },
      Status: {
        type: Sequelize.BOOLEAN
      },
      Floor: {
        type: Sequelize.STRING
      },
      BuildingNumber: {
        type: Sequelize.INTEGER
      },
      IsDelete:{
        type: Sequelize.BOOLEAN
      },
    }, {
      timestamps: false // ปิดการใช้งาน createdAt และ updatedAt
    });
  
    return Room;
  };
  