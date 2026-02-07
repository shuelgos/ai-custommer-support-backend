async function chatRoutes(fastify,options) {
    fastify.post('/chat',async(request,reply)=>{
        
        const{message,context}=request.body;
        
    })
    
}