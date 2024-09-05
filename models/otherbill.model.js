module.exports = (sequelize, Sequelize) => {
    const Other = sequelize.define("otherbill", {
      ID: {
        type: Sequelize.INTEGER,
        primaryKey: true, // กำหนดให้ jobID เป็น primary key
        allowNull: false,
        autoIncrement: true // หากต้องการให้มีการเพิ่มค่าของ primary key อัตโนมัติ
      },
      Roomid: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      BillName: {
        type: Sequelize.STRING
      },
      Price: {
        type: Sequelize.DECIMAL
      },
      IsDelete:{
        type: Sequelize.BOOLEAN
      },
    }, {
      timestamps: false // ปิดการใช้งาน createdAt และ updatedAt
    });
  
    return Other;
  };
  