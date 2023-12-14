const { respositoryService } = require('../services/respositoryService');

// src/routes/users.js
const repositoriesRoute = async (fastify) => {
  fastify.get(
    '/repositories/:username',
    {
      schema: {
        params: {
          type: 'object',
          properties: {
            username: {
              type: 'string',
              minLength: 2,
            },
          },
        },
      },
    },
    async (request, reply) => {
      const { username } = request.params;
      const repositoriesList = await respositoryService(username);
      reply.send(repositoriesList);
    }
  );
};

module.exports = repositoriesRoute;
