// src/app.js
const fastify = require('fastify')();
const cors = require('@fastify/cors');
// const cors = require('fastify-cors');
const routes = require('../../backend/src/routes');

// Register plugins
fastify.register(cors);

// Register routes
fastify.register(routes);

module.exports = fastify;
