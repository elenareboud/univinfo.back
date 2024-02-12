import Groupe from "../Models/groupe.js";

const seedGroupe = async () => {
    await Groupe.create({
        fonction: 'Administrateur', 
        AuthorisationId: 1 
    })
    await Groupe.create({ 
        fonction: 'Modérateur', 
        AuthorisationId: 2 })
    await Groupe.create({ 
        fonction: 'Utilisateur', 
        AuthorisationId: 3 
    })

    console.log('données GROUPE ok');
};

export default seedGroupe;