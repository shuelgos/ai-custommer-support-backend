const prisma = require('../lib/prisma');

async function createUser(email, name) {
  return prisma.user.create({
    data: {
      email,
      name
    }
  });
}

async function getUsers() {
  return prisma.user.findMany();
}

module.exports = {
  createUser,
  getUsers
};
