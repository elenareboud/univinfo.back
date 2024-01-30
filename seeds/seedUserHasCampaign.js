import UserHasCampaign from "../models/userhascampaign.js";

const seedUserHasCampaign = async () => {
  try {
    await UserHasCampaign.create({ UserId: 1, CampaignId:1 })
    await UserHasCampaign.create({ UserId: 2, CampaignId:2 })
    await UserHasCampaign.create({ UserId: 3, CampaignId:3 })

    console.log('données USER/CAMPAIGN ok')
  } catch (error) {
    console.error('Erreur lors du seeding de USER/CAMPAIGN:', error);
    }
  };

export default seedUserHasCampaign;
