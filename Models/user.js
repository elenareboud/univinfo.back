import sequelize from "../config/sequelize.js";
import { DataTypes, Model} from "sequelize";//Import the built-in data types
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
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: {
        msg: `L'adresse mail doit être valide.`
      },
    }
  },

}, {
  // Other model options go here
  sequelize,// We need to pass the connection instance
  modelName: 'User',// We need to choose the model name
  tableName: 'user'
});

//Cette fonction de hook beforeSave s'exécute automatiquement avant que l'instance de User soit 
//sauvegardée, assurant ainsi que le mot de passe est toujours haché.
User.beforeSave(async (user) => {
  if (user.changed('password')) {
    const hash = await bcrypt.hash(user.password, 10); 
    user.password = hash;
  }
});
//une méthode au prototype de User pour comparer un mot de passe en clair a
//avec le mot de passe haché stocké en utilisant bcrypt grâce à la fonction bcript.compare
User.prototype.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};


//déclaration des relations
Groupe.hasMany(User);
User.belongsTo(Groupe);

export default User;