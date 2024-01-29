import sequelize from "../database.js";
import { Model } from "sequelize";
import Tier from "./tier.js";
import Contact from "./contact.js";

class Bind extends Model {}

Bind.init({

}, {
  sequelize,
  modelName: 'Bind',
  tableName: 'bind'
});
Tier.hasMany(Bind);
Bind.belongsTo(Tier);

Contact.hasMany(Bind);
Bind.belongsTo(Contact);

export default Bind;