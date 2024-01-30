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


