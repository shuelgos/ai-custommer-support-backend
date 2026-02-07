async function versionRoutes(fastify,options){
    
    fastify.get('/version',async(request,reply)=>{
        return{
            "name":"AI Custommer Support Backend",
            "version":"0.1.0",
            "enviroment":"development"
        };
    });
};  

module.exports=versionRoutes;