// users.routes.js
async function usersRoutes(fastify, options) {

  // Hook para verificar token
  async function verifyToken(request, reply) {
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      return reply.status(401).send({ error: 'Token required' });
    }

    const token = authHeader.split(' ')[1];

    if (token !== '123abc-dummy-token') {
      return reply.status(401).send({ error: 'Invalid token' });
    }

    // Si llega aquí, el token es válido → deja pasar
  }

  // GET /users → protegido
  fastify.get('/users', { preHandler: verifyToken }, async (request, reply) => {
    return [
      { id: 1, name: 'Ana' },
      { id: 2, name: 'Juan' }
    ];
  });

  // POST /users → protegido
  fastify.post('/users', { preHandler: verifyToken }, async (request, reply) => {
    const { name } = request.body;

    if (!name) {
      return reply.status(400).send({ error: 'Name is required' });
    }

    const newUser = { id: Math.floor(Math.random() * 1000), name };
    return newUser;
  });

}

// Exportamos la función para usarla en app.js
module.exports = usersRoutes;
