import Authorisation from "../Models/authorisation.js";

const seedAuthorisation = async () => {
  try {
    await Authorisation.create({ 
      make: true, 
      edit: true, 
      suppress: true 
    });
    await Authorisation.create({ 
      make: true, 
      edit: false, 
      suppress: true 
    });
    await Authorisation.create({ 
      make: false, 
      edit: true, 
      suppress: true 
    });

    console.log('données AUTHORISATION ok')
  } catch (error) {
    console.error('Il y a un probléme', error);
    }
  };

export default seedAuthorisation;
