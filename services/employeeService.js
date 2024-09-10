const Employee = require('../models/Employee');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');


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
  async login(Userlogin, Password) {
    try {
      const user = await this.employeeModel.findOne({
        where: { Userlogin, IsDelete: false }
      });

      if (!user || Password !== user.Password) {
        throw new Error('อีเมลหรือรหัสผ่านไม่ถูกต้อง');
      }

      const token = jwt.sign(
        { id: user.ID, Userlogin: user.Userlogin },
        jwtConfig.secret,
        { expiresIn: '1d' }
      );

      const { Password: _, ...userWithoutPassword } = user.toJSON();

      return { user: userWithoutPassword, token };
    } catch (error) {
      throw new Error(error.message || 'เกิดข้อผิดพลาด');
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
