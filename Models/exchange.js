import sequelize from "../database.js";
import { DataTypes, Model } from "sequelize";
import User from "./user.js";
import Contact from "./contact.js";

class Exchange extends Model {}

Exchange.init({
  content: {
    type: DataTypes.STRING(255),
    allowNull: false, 
    validate: {
      notEmpty: {
        msg: "le message ne peut pas être vide.",
      },
    },
  },
}, {
  sequelize,
  modelName: 'Exchange',
  tableName: 'exchange'
});

User.hasMany(Exchange);
Exchange.belongsTo(User);

Contact.hasMany(Exchange);
Exchange.belongsTo(Contact);

export default Exchange;