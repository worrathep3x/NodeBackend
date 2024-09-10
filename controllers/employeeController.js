const EmployeeService = require('../services/employeeService');

class EmployeeController {
  constructor() {
    this.employeeService = new EmployeeService();
  }

  async getEmployees(request, response) {
    try {
      const users = await this.employeeService.getAllEmployees();
      response.send(users);
    } catch (error) {
        response.status(500).send({ error: error.message || 'Something went wrong' });
    }
  }

  async createEmployee(request, response) {
    try {
      const { Userlogin, Firstname, Lastname, Email, Password, Phone } = request.body;
      const newUser = await this.employeeService.createEmployee({
        Userlogin,
        Firstname,
        Lastname,
        Email,
        Password,
        Phone
      });
      response.send({ message: 'สมัครสมาชิกสำเร็จ', user: newUser });
    } catch (error) {
      response.status(400).send({ error: error.message || 'เกิดข้อผิดพลาด' });
    }
  }
}

module.exports = EmployeeController;
