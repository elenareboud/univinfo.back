import Bind from "../models/bind.js";

const seedBind = async () => {
  try {
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

    console.log('données BIND ok');

    } catch (error) {
    console.error('Erreur lors du seeding de BIND', error);
    }
  };

export default seedBind;