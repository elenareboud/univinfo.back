import sequelize from "../config/sequelize.js";
import { DataTypes, Model } from "sequelize";


class Campaign extends Model {}

Campaign.init({

  name: {
    type: DataTypes.STRING(40),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Le nom ne peut pas être vide.'
      }
    }
  },
  description: {
    type: DataTypes.STRING(255)
  },
  type: {
    type: DataTypes.STRING(40),
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Le type est obligatoire.'
      }
    }
  },
  message: {
    type: DataTypes.STRING(255)
  },

}, {
  sequelize,
  modelName: 'Campaign',
  tableName: 'campaign'
});

export default Campaign ;
