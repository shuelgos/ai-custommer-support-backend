async function callLLM(prompt){
    return`Respuesta generada para el mensaje {prompt}`
}

async function sendMessage(message,context) {

    if( !message || context.trim()===''){
        throw new Error('El mensaje no puede estar vacio');
    }

    if ( context && typeof context !=='string'){
        throw new Error ('Contexto invalido')
    }
}

// Simulación de obtener datos de Knowledge según contexto
function getRelevantKnowledge(context) {
    const knowledgeDB = [
        { topic: 'empresa', text: 'Nuestra empresa se dedica a soporte al cliente con AI.' },
        { topic: 'producto', text: 'Nuestro producto principal es un chatbot inteligente.' }
    ];

    if (!context) return knowledgeDB.map(k => k.text); // todo
    return knowledgeDB
        .filter(k => k.topic === context)
        .map(k => k.text);
}

const relevantInfo=getRelevantKnowledge(context);

const prompt= `Usando esta informacion: ${relevantInfo.join('')} responde a esta
    pregunta del usuario: ${message}`;

    const LLMResponse=await callLLM(prompt);