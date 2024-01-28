// src/app.js
const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const UserController = require('./controllers/UserController');

const app = express();
const port = 3000;

// Swagger Configuration
const swaggerOptions = require('./swagger');
const swaggerSpec = swaggerJsDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/users', UserController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
