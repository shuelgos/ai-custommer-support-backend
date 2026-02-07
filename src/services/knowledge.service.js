
const knowledgeDB = [
  {
    topic: 'payments',
    text: 'You can pay using credit card or PayPal.'
  },
  {
    topic: 'support',
    text: 'Our support team works 24/7.'
  },
  {
    topic: 'general',
    text: 'Welcome to our platform.'
  }
];

function getRelevantKnowledge(message,context){
    return knowledgeDB
    .filter(item=>
        item.topic===context
    ).map(item=>item.text)
}

module.exports={getRelevantKnowledge};