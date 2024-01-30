import Contact from "../models/contact.js";

const seedContact = async () => {
    // Ajoutez ici les données pour Contact
    // Exemple:
    await Contact.create({
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
    });

    console.log('données CONTACT ok');
};