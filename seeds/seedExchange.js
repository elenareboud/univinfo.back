import Exchange from "../models/exchange.js";

const seedExchange = async () => {
  try {
    await Exchange.create({ 
      UserId: 1, 
      ContactId: 1, 
      content: 'envoyer un devis' 
    })
    await Exchange.create({ 
      UserId: 2, 
      ContactId: 2, 
      content: 'rapeller plus tard.' 
    })
    await Exchange.create({ 
      UserId: 3, 
      ContactId: 3, 
      content: 'ne plus déranger.' 
    })
    await Exchange.create({ 
      UserId: 7, 
      ContactId: 5, 
      content: 'prise de contact ok' 
    })
    await Exchange.create({ 
      UserId: 7, 
      ContactId: 5, 
      content: "invitation a un rdv en attente d'une réponse" 
    })
    await Exchange.create({ 
      UserId: 7, 
      ContactId: 5, 
      content: 'retour a la case départ' 
    })
    
    console.log('données EXCHANGE ok')
  } catch (error) {
    console.error('Erreur lors du seeding de EXCHANGE:', error);
    }
  };

export default seedExchange;
