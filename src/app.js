const fastify=require ('fastify')({logger:true});

//routes 
fastify.get('/health',async(request,reply) => {
    return{
        status:'ok',
        uptime:proccess.uptime()
    };
});

//Usamos async porque levantar un servidor es un proceso asincrono
const start= async()=>{
    try{
        await fastify.listen({port:3000})
        console.log('Server running')
       
    } catch (err) {
        
        fastify.log.error(err);
        proccess.exit(1);
    }

}

start();