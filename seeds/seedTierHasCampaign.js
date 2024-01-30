import TierHasCampaign from "../models/tierhascampaign.js";

const seedTierHasCampaign = async () => {
  try {
    await TierHasCampaign.create({ TierId: 1, CampaignId:1 })
    await TierHasCampaign.create({ TierId: 2, CampaignId:2 })
    await TierHasCampaign.create({ TierId: 3, CampaignId:3 })
    await TierHasCampaign.create({ TierId: 4, CampaignId:4 })
    await TierHasCampaign.create({ TierId: 5, CampaignId:5 })
    await TierHasCampaign.create({ TierId: 6, CampaignId:6 })
    await TierHasCampaign.create({ TierId: 5, CampaignId:6 })
    await TierHasCampaign.create({ TierId: 4, CampaignId:6 })
    await TierHasCampaign.create({ TierId: 3, CampaignId:6 })
    await TierHasCampaign.create({ TierId: 2, CampaignId:6 })
    await TierHasCampaign.create({ TierId: 1, CampaignId:6 })

    console.log("données TIER/CAMPAIGN ok**********");
  
  } catch (error) {
    console.error('Erreur lors du seeding de TIER/CAMPAIGN:', error);
    }
  };

export default seedTierHasCampaign;
