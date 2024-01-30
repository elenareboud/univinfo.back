import sequelize from "../config/sequelize.js";
import {  Model } from "sequelize";

import Tier from "./tier.js";
import Campaign from "./campaign.js";

class TierHasCampaign extends Model { }

TierHasCampaign.init({},
  
{    sequelize,
    modelName: 'TierHasCampaign',
    tableName: 'tierhascampaign'}
  );

Campaign.hasMany(TierHasCampaign);
TierHasCampaign.belongsTo(Campaign);

Tier.hasMany(TierHasCampaign);
TierHasCampaign.belongsTo(Tier);


export default TierHasCampaign;
