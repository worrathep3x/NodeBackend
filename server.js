const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const { readdirSync} = require('fs')
const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({limit:'10mb'}))
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World API',
      version: '1.0.0',
      description: 'A simple API',
    },
  },
  apis: ['./server.js','./Routes/*.js'], // ตำแหน่งไฟล์ที่เขียน Swagger docs
};
const swaggerSpec = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const db = require("./models");
// db.sequelize.sync()
//   .then(() => {
//     console.log("Synced db.");
//   })
//   .catch((err) => {
//     console.log("Failed to sync db: " + err.message);
//   });
db.sequelize.authenticate()
  .then(() => {
    console.log("Connection to the database successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err.message);
  });

// localhost:5000/image
app.use('/image',express.static('./images'))

app.use(express.json())

readdirSync('./Routes')
    .map((r) => app.use('/api',require(`./Routes/${r}`)))


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server Running on port :${port}`);
    console.log('Press Ctrl + C to quit.');
})