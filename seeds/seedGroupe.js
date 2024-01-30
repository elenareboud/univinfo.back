import Groupe from "../models/groupe.js";

const seedGroupe = async () => {
    await Groupe.create({ 
      
    });

    console.log('données GROUPE ok');
};

export default seedGroupe;