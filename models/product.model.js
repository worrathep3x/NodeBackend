module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      jobID: {
        type: Sequelize.INTEGER,
        primaryKey: true, // กำหนดให้ jobID เป็น primary key
        autoIncrement: true // หากต้องการให้มีการเพิ่มค่าของ primary key อัตโนมัติ
      },
      jobDept: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      salary_range: {
        type: Sequelize.STRING
      }
    }, {
      timestamps: false // ปิดการใช้งาน createdAt และ updatedAt
    });
  
    return Product;
  };
  