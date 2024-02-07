import User from "../models/user.js";

//on pousse le nouvel utilisateur dans notr bdd grâce à la méthode
//create
const seedUser = async () => {
  try {
    await User.create({ 
      lastname: 'ladmin', 
      firstname: 'John', 
      password: 'password111', 
      email: 'admin@example.com', 
      GroupeId: 1 
    })
    await User.create({ 
      lastname: 'lemodo', 
      firstname: 'John', 
      password: 'password222', 
      email: 'mode@example.com', 
      GroupeId: 2 
    })
    await User.create({ 
      lastname: 'lutil', 
      firstname: 'John', 
      password: 'password333', 
      email: 'util@example.com', 
      GroupeId: 3 
    })
    
    console.log('données USER ok')
  } catch (error) {
    console.error('Il y a un probléme', error);
    }
  };



export default seedUser;
