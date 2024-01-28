// src/swagger.js
module.exports = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Example API',
      version: '1.0.0',
      description: 'An example backend API',
    },
  },
  apis: ['./src/controllers/*.js'],
};