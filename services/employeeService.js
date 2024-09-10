const Employee = require('../models/Employee');

class EmployeeService {
  constructor() {
    this.employeeModel = new Employee().getModel();
  }

  async getAllEmployees() {
    try {
      const users = await this.employeeModel.findAll();
      return users;
    } catch (error) {
      throw new Error(error.message || 'Something went wrong while fetching employees');
    }
  }

  async createEmployee(data) {
    const { Userlogin, Email } = data;

    const existingUser = await this.employeeModel.findOne({ where: { Userlogin } });
    if (existingUser) {
      throw new Error('ชื่อผู้ใช้ถูกใช้ไปแล้ว');
    }

    const existingEmail = await this.employeeModel.findOne({ where: { Email } });
    if (existingEmail) {
      throw new Error('อีเมลถูกใช้ไปแล้ว');
    }

    const newUser = await this.employeeModel.create({
      ...data,
      isdelete: false
    });

    const { Password, ...userWithoutPassword } = newUser.toJSON();
    return userWithoutPassword;
  }
}

module.exports = EmployeeService;
