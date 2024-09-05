module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
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
      Userlogin: {
        type: Sequelize.STRING
      },
      Password: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      Phone: {
        type: Sequelize.STRING
      },
      IsDelete:{
        type: Sequelize.BOOLEAN
      },
    }, {
      timestamps: false // ปิดการใช้งาน createdAt และ updatedAt
    });
  
    return Employee;
  };
  