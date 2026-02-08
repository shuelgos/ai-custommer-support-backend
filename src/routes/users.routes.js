const {
  getUsersController,
  createUserController
} = require('../controllers/users.controller');

async function usersRoutes(fastify, options) {
  fastify.get('/users', getUsersController);
  fastify.post('/users', createUserController);
}

module.exports = usersRoutes;
