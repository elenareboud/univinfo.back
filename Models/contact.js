import sequelize from "../config/sequelize.js";
import { DataTypes, Model, Validator } from "sequelize";

class Contact extends Model {}

Contact.init({

  title: {
    type: DataTypes.STRING(10)
  },
  firstname: {
    type: DataTypes.STRING(40),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Le prénom ne peut pas être vide.'
      }
    }
  },
  lastname: {
    type: DataTypes.STRING(40),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Le nom ne peut pas être vide.'
      }
    }
  },
  work_phone: {
    type: DataTypes.STRING(20),

  },
  cellphone: {
    type: DataTypes.STRING(20),

  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
      notEmpty: {
        msg: 'Email obligatoire.'
      }
    }
  },
  networks: {
    type: DataTypes.STRING(255)
  },
  poste_fonction: {
    type: DataTypes.STRING(40)
  },
  address: {
    type: DataTypes.STRING(255)
  },
  personal_data: {
    type: DataTypes.STRING(255)
  },
  actif: {
    type: DataTypes.BOOLEAN
  }
}, {
  sequelize,
  modelName: 'Contact',
  tableName: 'contact'
});

export default Contact;