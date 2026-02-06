async function companiesRoutes(fastify, options) {
  fastify.get('/companies', async (request, reply) => {
    return [
      { id: 1, name: "Acme Corp" },
      { id: 2, name: "Globex" }
    ];
  });

  fastify.post('/companies', async (request, reply) => {
    const { name } = request.body;
    const newCompany = { id: Math.floor(Math.random() * 1000), name };
    return newCompany;
  });
}

// IMPORTANTE: exporta la función directamente
module.exports = companiesRoutes;
