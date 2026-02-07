async function authRoutes (fastify,options){

    fastify.post('/auth/register',(request,reply)=>{
        const {email,password}=request.body;

        //Validaciones basicas 
        if (!email||!password){
            return reply.status(400).send({error:'Email and password required'});
        }
        const newUser={id:Math.floor(Math.random()*1000),email,password};

        return {id:newUser.id,email:newUser.email}

    });

    fastify.post('/auth/login',(request,reply)=>{
        const {email,password}=request.body;

        if (!email||!password){
            return reply.status(400).send({error:'Email and password required'});
        }
        
        const users =[
            { id: 1, email: 'ana@mail.com', password: '1234' },
            { id: 2, email: 'juan@mail.com', password: 'abcd' }
        ]

        const user=users.find(u=>u.email===email);

        if(!user){
            return reply.status(401).send({error:'Invalid credentials'})
        }
        if(user.password!==password){
            return reply.status(401).send({error:'Invalid credentials'})
        }

        return {token:'1234ac-token-dummy'};
    });

};


module.exports=authRoutes;
