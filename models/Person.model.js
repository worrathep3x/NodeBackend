module.exports = (sequelize, Sequelize) => {
  const Person = sequelize.define("person", {
    personid: {
      type: Sequelize.INTEGER // เปลี่ยนจาก Sequelize.NUMBER เป็น Sequelize.INTEGER
    },
    lastname: {
      type: Sequelize.STRING
    },
    firstname: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING
    }
  });

  return Person;
};