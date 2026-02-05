const fastify=require ('fastify')({logger:true});
const healthRoutes=require('./routes/health.routes');

fastify.register(healthRoutes);

//Usamos async porque levantar un servidor es un proceso asincrono
const start= async()=>{
    try{
        await fastify.listen({port:3000});
        console.log('Server running in port 3000');
       
    } catch (err) {
        
        fastify.log.error(err);
        proccess.exit(1);
    }

}

start();