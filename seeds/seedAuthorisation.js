import Authorisation from "../models/authorisation.js";

const seedAuthorisation = async () => {
    await Authorisation.create({ make: true, edit: true, suppress: true });
    await Authorisation.create({ make: true, edit: false, suppress: true });
    await Authorisation.create({ make: false, edit: true, suppress: true });

    console.log('données AUTHORISATION ok');
};

export default seedAuthorisation;
