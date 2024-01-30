import sequelize from "../config/sequelize.js";
import { DataTypes, Model, Validator } from "sequelize";//Import the built-in data types
import Groupe from "./groupe.js";
import bcrypt from 'bcrypt';

class User extends Model {}

//Model.init de Sequelize
User.init({
// Model attributes are defined here
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
  // Other model options go here
  sequelize,// We need to pass the connection instance
  modelName: 'User',// We need to choose the model name
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