import Tier from "../models/tier.js";

const seedTier = async () => {
  try {
    await Tier.create({
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

    console.log('données TIER ok')
  } catch (error) {
    console.error('Erreur lors du seeding de TIER', error);
    }
  };

export default seedTier;