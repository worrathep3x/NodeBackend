const fastify = require('fastify')({ logger: true });
const { readdirSync } = require('fs');
const cors = require('@fastify/cors');
const swagger = require('@fastify/swagger');
const swaggerUi = require('@fastify/swagger-ui');
const jwt = require('@fastify/jwt');
const jwtConfig = require('./config/jwt');

fastify.register(jwt, {
  secret: jwtConfig.secret
});

fastify.register(cors, { 
  origin: '*'
});

fastify.register(require('@fastify/formbody'));

fastify.register(require('@fastify/static'), {
  root: require('path').join(__dirname, 'images'),
  prefix: '/image/',
});

fastify.register(swagger, {
  routePrefix: '/documentation',
  swagger: {
    info: {
      title: 'AMS API',
      version: '1.0.0',
    },
    host: 'localhost:5000',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
  },
  exposeRoute: true,
});

fastify.register(swaggerUi, {
  routePrefix: '/swagger',
  uiConfig: {
    docExpansion: 'none',
    deepLinking: false
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject, request, response) => {
    return swaggerObject;
  },
  transformSpecificationClone: true
});

const db = require("./config/db");
db.sequelize.authenticate()
  .then(() => {
    fastify.log.info("Connection to the database successfully.");
  })
  .catch(err => {
    fastify.log.error("Unable to connect to the database:", err.message);
  });

readdirSync('./Routes').map((r) => {
  fastify.register(require(`./Routes/${r}`), { prefix: '/api' });
});

fastify.get('/', async (request, response) => {
  response.redirect('/swagger');
});

const start = async () => {
  try {
    const port = process.env.PORT || 5000;
    await fastify.listen({ port });
    fastify.log.info(`Server Running on port: ${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
