// src/routes/index.js
const repositories = require('./repositoriesRoute');

const routes = async (fastify) => {
  fastify.register(repositories);
};

module.exports = routes;
