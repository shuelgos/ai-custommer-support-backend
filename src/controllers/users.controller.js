const { createUser, getUsers } = require('../services/users.service');

async function getUsersController(request, reply) {
  const users = await getUsers();
  return users;
}

async function createUserController(request, reply) {
  const { email, name } = request.body;

  if (!email) {
    reply.code(400);
    return { error: 'Email is required' };
  }

  const user = await createUser(email, name);
  reply.code(201);
  return user;
}

module.exports = {
  getUsersController,
  createUserController
};
