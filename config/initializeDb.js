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
    await Contact.create(
        {
            title: 'M.',
            firstname: 'Jean-Philippe',
            lastname: 'Promms',
            work_phone: '0123456789',
            cellphone: '9876543210',
            email: 'john.doe@example.com',
            networks: 'linkedin.com/johndoe',
            poste_fonction: 'Manager',
            address: '123 Main St, City',
            personal_data: 'Consent given',
            actif: true,
        })
    await Contact.create(
        {
            title: 'Mme',
            firstname: 'Jane',
            lastname: 'Smith',
            work_phone: '9876543210',
            cellphone: '0123456789',
            email: 'jane.smith@example.com',
            networks: 'twitter.com/janesmith',
            poste_fonction: 'Analyst',
            address: '456 Elm St, City',
            personal_data: 'Consent given',
            actif: true,
        })
    await Contact.create(
        {
            title: 'M.',
            firstname: 'Robert',
            lastname: 'Johnson',
            work_phone: '0123456789',
            cellphone: '9876543210',
            email: 'robert.johnson@example.com',
            networks: 'linkedin.com/robertjohnson',
            poste_fonction: 'Developer',
            address: '789 Oak St, City',
            personal_data: 'Consent given',
            actif: true,
        })

    console.log('données CONTACT ok')

    await Groupe.create({ fonction: 'Administrateur', AuthorisationId: 1 })
    await Groupe.create({ fonction: 'Modérateur', AuthorisationId: 2 })
    await Groupe.create({ fonction: 'Utilisateur', AuthorisationId: 3 })
    console.log('données GROUPE ok')
    
    await User.create({ lastname: 'ladmin', firstname: 'John', password: 'password111', email: 'admin@example.com', GroupeId: 1 })
    await User.create({ lastname: 'lemodo', firstname: 'John', password: 'password222', email: 'mode@example.com', GroupeId: 2 })
    await User.create({ lastname: 'lutil', firstname: 'John', password: 'password333', email: 'util@example.com', GroupeId: 3 })

    console.log('données USER ok')
    await Tier.create(
        {
            address: '123 Main St, City',
            country: 'USA',
            website: 'example.com',
            category: 'Client',
            social_reason: 'ABC Corporation',
            networks: 'linkedin.com/abccorp',
            email: 'contact@abccorp.com',
            phone: '0123456789',
            siren: '123456789',
            siret: '12345678900001',
            naf: 'IT Services',
            vat: 'US123456789',
            commercial_register: '12345',
            staff: 100,
            judicial_status: 'SARL',
            actif: true,
            UserId: 1,
        },
    )
    await Tier.create(
        {
            address: '456 Elm St, City',
            country: 'USA',
            website: 'example2.com',
            category: 'Fournisseur',
            social_reason: 'XYZ Inc',
            networks: 'linkedin.com/xyzinc',
            email: 'contact@xyzinc.com',
            phone: '9876543210',
            siren: '987654321',
            siret: '98765432100001',
            naf: 'Manufacturing',
            vat: 'US987654321',
            commercial_register: '54321',
            staff: 500,
            judicial_status: 'SA',
            actif: true,
            UserId: 2,
        },
    )
    await Tier.create(
        {
            address: '789 Oak St, City',
            country: 'USA',
            website: 'example3.com',
            category: 'Partenaire',
            social_reason: '123 Corp',
            networks: 'linkedin.com/123corp',
            email: 'contact@123corp.com',
            phone: '0123455789',
            siren: '123456779',
            siret: '12345678900002',
            naf: 'Consulting',
            vat: 'US123456799',
            commercial_register: '67890',
            staff: 50,
            judicial_status: 'SAS',
            actif: true,
            UserId: 3,
        },
    )
    await Tier.create(
        {
            address: '12 RUE ALBERT EINSTEIN 48000 MENDE',
            country: 'France',
            website: 'https://www.sigma-vision.com/fr/',
            category: 'Concurent',
            social_reason: 'SIGMA-VISION',
            networks: 'https://fr.linkedin.com/company/sigma-vision.com',
            email: 'contact@sigma.fr',
            phone: '0468305691',
            siren: '479595381',
            siret: '47959538100027',
            naf: '?????',
            vat: 'FR93479595381',
            commercial_register: '?????',
            staff: 9,
            judicial_status: 'SARL',
            actif: true,
            UserId: 1,
        },
    )
    await Tier.create(
        {
            address: '2 allée des Jasmins 57130 Ars-sur-Moselle',
            country: 'France',
            website: 'https://www.univinfo.fr/',
            category: 'GAFAM',
            social_reason: 'Univinfo',
            networks: 'https://fr.linkedin.com/company/univinfo',
            email: 'contact@univinfo.fr',
            phone: '0671230784',
            siren: '904137437',
            siret: '90413743700011',
            naf: 'Autres enseignements (8559B)',
            vat: 'FR62904137437',
            commercial_register: '?????',
            staff: 2,
            judicial_status: 'Entrepreneur individuel',
            actif: true,
            UserId: 1,
        },
    )
    await Tier.create(
        {
            address: "28 RUE D'EPAGNAC 16800 SOYAUX",
            country: 'France',
            website: 'https://www.credit-agricole.fr/',
            category: 'Banque',
            social_reason: 'Crédit Agricole Charente-Périgord',
            networks: 'https://fr.linkedin.com/company/cr%C3%A9dit-agricole-charente-p%C3%A9rigord',
            email: 'contact@ca.fr',
            phone: '0671230784',
            siren: '775569726',
            siret: '77556972601040',
            naf: 'Autres intermédiations monétaires (6419Z)',
            vat: 'FR66775569726',
            commercial_register: '?????',
            staff: 1277,
            judicial_status: '',
            actif: true,
            UserId: 1,
        },
    )
    await Tier.create(
        {
            address: "10 RUE DE PENTHIEVRE 75008 PARIS",
            country: 'France',
            website: 'https://oclock.io/',
            category: 'Fournisseur de stagière',
            social_reason: "O'CLOCK",
            networks: "https://fr.linkedin.com/school/ecole-o'clock/",
            email: 'hey@oclock.io',
            phone: '0974768067',
            siren: '818614588',
            siret: '81861458800023',
            naf: "Formation continue d'adultes (8559A)",
            vat: 'FR07818614588',
            commercial_register: 'Paris B 818 614 588',
            staff: 200,
            judicial_status: 'SAS',
            actif: true,
            UserId: 1,
        },
    )
    await Tier.create(
        {
            address: "10 rue du Pont Hardy",
            country: 'France',
            website: 'None',
            category: 'Intermédiaires du commerce en produits divers',
            social_reason: 'Navis Marketing',
            networks: "https://fr.linkedin.com/in/mathis-butraud-loury-a283a11b3",
            email: 'unmailauhasard@mail.com',
            phone: '0689054636',
            siren: '882164577',
            siret: '88216457700018',
            naf: "Autres intermédiaires du commerce en produits divers (4619B)",
            vat: 'FR63882164577',
            commercial_register: 'Meaux B 882 164 577',
            staff: 1,
            judicial_status: 'SASU',
            actif: true,
            UserId: 1,
        }
    )

    console.log("données TIER ok");

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

    await Bind.create({ TierId: 1, ContactId: 1 })
    await Bind.create({ TierId: 2, ContactId: 2 })
    await Bind.create({ TierId: 3, ContactId: 3 })
    await Bind.create({ TierId: 5, ContactId: 7 })
    await Bind.create({ TierId: 4, ContactId: 4 })
    await Bind.create({ TierId: 4, ContactId: 6 })
    await Bind.create({ TierId: 6, ContactId: 8 })
    await Bind.create({ TierId: 7, ContactId: 4 })
    await Bind.create({ TierId: 7, ContactId: 5 })
    await Bind.create({ TierId: 7, ContactId: 6 })
    await Bind.create({ TierId: 7, ContactId: 7 })
    await Bind.create({ TierId: 7, ContactId: 8 })
    await Bind.create({ TierId: 8, ContactId: 5 })
    console.log("********données BIND ok**********");

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


