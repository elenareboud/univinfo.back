import sequelize from "../db/dbConnection.js";
import { DataTypes, Model } from "sequelize";
import Authorisation from "./authorisation.js";

class Groupe extends Model {}

Groupe.init({

  fonction: {
    type: DataTypes.STRING(40),
    allowNull:false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },

}, {
  sequelize,
  modelName: 'Groupe',
  tableName: 'groupe'
})

Authorisation.hasMany(Groupe);
Groupe.belongsTo(Authorisation);

export default Groupe;