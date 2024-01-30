import sequelize from "./sequelize.js";
//import des seed
import seedAuthorisation from "../seeds/seedAuthorisation.js";
import seedGroupe from "../seeds/seedGroupe.js";
import seedUser from "../seeds/seedUser.js";
import seedContact from "../seeds/seedContact.js";
import seedTier from "../seeds/seedTier.js";
import seedCampaign from "../seeds/seedCampaign.js";
import seedExchange from "../seeds/seedExchange.js";
import seedBind from "../seeds/seedBind.js";
import seedTierHasCampaign from "../seeds/seedTierHasCampaign.js";
import seedUserHasCampaign from "../seeds/seedUserHasCampaign.js";

// la connexion à la base de données, sa réinitialisation, 
//et l'appel à chaque script de seeding dans l'ordre nécessaire.

const initializeDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection avec la database réussie');

        await sequelize.drop();
        //A model can be synchronized with the database by calling model.sync(options), 
        //an asynchronous function (that returns a Promise). 
        await sequelize.sync({ force: true });//This creates the table, dropping it first if it already existed
        console.log('******Toutes les tables sont crées******');

        await seedAuthorisation();
        await seedContact();
        await seedGroupe();
        await seedUser();
        await seedContact();
        await seedTier();
        await seedCampaign();
        await seedExchange();
        await seedBind();
        await seedTierHasCampaign();
        await seedUserHasCampaign();
        

        console.log("Toutes les données ont été initialisées avec succès");
    } catch (error) {
        console.error('Erreur lors de l’initialisation de la base de données:', error);
    }
};

initializeDatabase();


    
//A model can be synchronized with the database by calling model.sync(options), 
//an asynchronous function (that returns a Promise). 
    await sequelize.sync({ force:true });//This creates the table, dropping it first if it already existed
    console.log('******Toutes les tables sont crées******');
    //on ajoute nos fausses données

    // Seed des données pour la table AUTHORISATION
    await Authorisation.create({ make: true, edit: true, suppress: true })
    await Authorisation.create({ make: true, edit: false, suppress: true })
    await Authorisation.create({ make: false, edit: true, suppress: true })
    console.log('données AUTHORISATION ok')
    // Seed des données pour la table CONTACT
    

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

    await Exchange.create({ UserId: 1, ContactId: 1, content: 'envoyer un devis' })
    await Exchange.create({ UserId: 2, ContactId: 2, content: 'rapeller plus tard.' })
    await Exchange.create({ UserId: 3, ContactId: 3, content: 'ne plus déranger.' })
    await Exchange.create({ UserId: 7, ContactId: 5, content: 'prise de contact ok' })
    await Exchange.create({ UserId: 7, ContactId: 5, content: "invitation a un rdv en attente d'une réponse" })
    await Exchange.create({ UserId: 7, ContactId: 5, content: 'retour a la case départ' })
    console.log("données EXCHANGE ok");

    
    await TierHasCampaign.create({ TierId: 1, CampaignId:1 })
    await TierHasCampaign.create({ TierId: 2, CampaignId:2 })
    await TierHasCampaign.create({ TierId: 3, CampaignId:3 })
    await TierHasCampaign.create({ TierId: 4, CampaignId:4 })
    await TierHasCampaign.create({ TierId: 5, CampaignId:5 })
    await TierHasCampaign.create({ TierId: 6, CampaignId:6 })
    await TierHasCampaign.create({ TierId: 5, CampaignId:6 })
    await TierHasCampaign.create({ TierId: 4, CampaignId:6 })
    await TierHasCampaign.create({ TierId: 3, CampaignId:6 })
    await TierHasCampaign.create({ TierId: 2, CampaignId:6 })
    await TierHasCampaign.create({ TierId: 1, CampaignId:6 })
    console.log("********affectation TIER/campaign ok**********");
    
    await UserHasCampaign.create({ UserId: 1, CampaignId:1 })
    await UserHasCampaign.create({ UserId: 2, CampaignId:2 })
    await UserHasCampaign.create({ UserId: 3, CampaignId:3 })
    console.log("********affectation USER/campaign ok**********");

} catch (error) {
    console.error('Il y a un probléme', error);
}


