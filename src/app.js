const fastify=require ('fastify')({logger:true});
const healthRoutes=require('./routes/health.routes.js');
const versionRoutes=require('./routes/version.routes.js');
const usersRoutes=require('./routes/users.routes.js');
const companiesRoutes=require('./routes/companies.routes.js');

fastify.register(usersRoutes);
fastify.register(healthRoutes); //->No error
fastify.register(versionRoutes);
fastify.register(companiesRoutes);


//Usamos async porque levantar un servidor es un proceso asincrono
const start= async()=>{
    try{
        await fastify.listen({port:3000});
        console.log('Server running in port 3000');
       
    } catch (err) {
        
        fastify.log.error(err);
        process.exit(1);
    }

}

start();