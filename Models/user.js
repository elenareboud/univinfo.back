import sequelize from "../db/dbConnection.js";
import { DataTypes, Model, Validator } from "sequelize";
import Groupe from "./groupe.js";
import bcrypt from 'bcrypt';

class User extends Model {}

User.init({

  lastname: {
    type: DataTypes.STRING(40),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Le nom ne peut pas être vide.'
      }
    }
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
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    set(value) {
      const hash = bcrypt.hashSync(value, 10); // hash du password 10fois
      this.setDataValue('password', hash);
    }
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

}, {
  sequelize,
  modelName: 'User',
  tableName: 'user'
});

//definition d'une fonction de comparaison intégré au model
User.prototype.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

//déclaration des relations
Groupe.hasMany(User);
User.belongsTo(Groupe);

export default User;