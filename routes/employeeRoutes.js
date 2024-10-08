const EmployeeController = require('../controllers/employeeController');
const authJwt = require('../middleware/authJwt');

async function employeeRoutes(fastify, options) {
  const employeeController = new EmployeeController();

//   JWT Authorize
  fastify.get('/users/get', { preHandler: authJwt }, async (request, response) => {
    return employeeController.getEmployees(request, response);
  });

  fastify.post('/auth/login', async (request, response) => {
    return employeeController.login(request, response);
  });

  fastify.post('/users/create', async (request, response) => {
    return employeeController.createEmployee(request, response);
  });
}

module.exports = employeeRoutes;
