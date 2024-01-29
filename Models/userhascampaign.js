import sequelize from "../database.js";
import {  Model } from "sequelize";

import User from "./user.js";
import Campaign from "./campaign.js";

class UserHasCampaign extends Model { }

UserHasCampaign.init({},
  
{    sequelize,
    modelName: 'UserHasCampaign',
    tableName: 'userhascampaign'}
  );

Campaign.hasMany(UserHasCampaign);
UserHasCampaign.belongsTo(Campaign);

User.hasMany(UserHasCampaign);
UserHasCampaign.belongsTo(User);


export default UserHasCampaign;