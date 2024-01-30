import sequelize from "../config/sequelize.js";
import { DataTypes, Model, Validator } from "sequelize";
import User from "./user.js";

class Tier extends Model {}

Tier.init({

  address: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'L\'adresse ne peut pas être vide.'
      }
    }
  },
  country: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Le pays ne peut pas être vide.'
      }
    }
  },
  website: {
    type: DataTypes.STRING(255)
  },
  category: {
    type: DataTypes.STRING(100),
    
  },
  social_reason: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Le nom ne peut pas être vide.'
      }
    }
  },
  networks: {
    type: DataTypes.STRING(255)
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: {
        msg: 'L\'email ne peut être vide.'
      },
      isEmail: true
    }
  },
  phone: {
    type: DataTypes.STRING(20)
  },
  siren: {
    type: DataTypes.STRING(10),
  },
  siret: {
    type: DataTypes.STRING(20),
  },
  naf: {
    type: DataTypes.STRING(100)
  },
  vat: {
    type: DataTypes.STRING(40)
  },
  commercial_register: {
    type: DataTypes.STRING(255)
  },
  staff: {
    type: DataTypes.INTEGER
  },
  judicial_status: {
    type: DataTypes.STRING(40)
  },
  actif: {
    type: DataTypes.BOOLEAN
  },

}, {
  sequelize,
  modelName: 'Tier',
  tableName: 'tier'
});

User.hasMany(Tier);
Tier.belongsTo(User);

export default Tier;
