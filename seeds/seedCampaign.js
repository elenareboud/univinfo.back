import Campaign from "../Models/campaign.js";

const seedCampaign = async () => {
  try {
    await Campaign.create({
      name: "Solde d'été",
      description: "Promotion pour les produit d'été",
      type: 'Email',
      message: 'venez voir nos ventes exclusifs!',

  })
  await Campaign.create({
      name: 'lancement nouveau produit',
      description: "introduction d'un nouveau produit dans notre gamme",
      type: 'Phoning',
      message: 'Exciting news! We have just launched our new product.',

  })
  await Campaign.create({
      name: 'Nouveauté',
      description: 'Nouveau magasin',
      type: 'Email',
      message: 'Nous ouvrons un nouveau magasin !',
  })
  await Campaign.create({
      name: 'Jeu video',
      description: 'Offre de lancement',
      type: 'Phoning',
      message: 'Nouveau produit à découvrir.',
  })
  await Campaign.create({
      name: 'Journée spéciale',
      description: 'Soldes sur tout',
      type: 'Email',
      message: 'Venez profiter de nos soldes sur tous les produits !',
  })
  await Campaign.create({
      name: 'nouveau CRM',
      description: 'présentation application',
      type: 'Email',
      message: 'Venez découvrir notre super crm ',
  })
  console.log("données CAMPAIGN ok")
  
  } catch (error) {
    console.error('Erreur lors du seeding de CAMPAIGN', error);
    }
  };

export default seedCampaign;
