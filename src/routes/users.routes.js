// Plugin para manejar los endpoints de Users
async function usersRoutes(fastify, options) {
  // GET /users → devuelve lista dummy de usuarios
  fastify.get('/users', async (request, reply) => {
    return [
      { id: 1, name: 'Ana' },
      { id: 2, name: 'Juan' }
    ];
  });

  // POST /users → crea usuario dummy
  fastify.post('/users', async (request, reply) => {
    const { name } = request.body; // extrae el name del body JSON

    // Generamos un id aleatorio para simular creación de usuario
    const newUser = { id: Math.floor(Math.random() * 1000), name };
    return newUser;
  });
}

// Exportamos la función directamente para Fastify
module.exports = usersRoutes;
