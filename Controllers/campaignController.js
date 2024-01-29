import Campaign from '../MODELS/campaign.js';
import { Op } from 'sequelize';
import UserHasCampaign from '../MODELS/userhascampaign.js';
import TierHasCampaign from '../MODELS/tierhascampaign.js';
import User from '../MODELS/user.js';
import Tier from '../MODELS/tier.js';

const campaignControler = {

  all: async function (req, res) {
    try {
      const campaign = await Campaign.findAll();
      res.json(campaign);
    }
    catch (error) {
      console.error(error);
      res.status(500).render('error');
    }
  },
  findByName: async function (req, res) {
    try {
      const name = req.params.name;
      const campaign = await Campaign.findAll({
        where: { name: { [Op.iLike]: name + "%" } },//ilike permet d'etre insensible aux majuscules
      });

      if (campaign) {
        res.json(campaign);
      } else {
        res.status(404).json({ message: "aucun résultat" });
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "une erreur est survenue" });
    }
  },
  details: async function (req, res) {
    try {
      const id = req.params.id;
      const campaign = await Campaign.findOne(
        {
          where: { id },
          include: [
            { model: UserHasCampaign, include: { model: User } },
            { model: TierHasCampaign, include: { model: Tier }  }
          ]
        }
      );

      if (campaign) {
        res.status(200).json(campaign);
      } else {
        res.status(404).json({ message: "aucun résultat" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "une erreur est survenue" });
    }
  },

  addCampaign: async function (req, res) {
    try {
      const newCampaign = req.body;
      const createCampaign = await Campaign.create(newCampaign);
      res.status(201).json({
        message: "Campagne ajoutée avec succès !",
        campaign: createCampaign
      });
    }
    catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur est survenue lors de la création de campagne",
        error: error.message
      });
    }
  },

  updateCampaign: async function (req, res) {
    try {
      const campaignId = req.params.campaignid;
      const updatedCampaignData = req.body;
      const existingCampaign = await Campaign.findByPk(campaignId);

      if (!existingCampaign) {
        return res.status(404).json({
          message: "Campagne introuvable",
        });
      }

      await existingCampaign.update(updatedCampaignData);

      res.status(202).json({
        message: "Campagne mise à jour avec succès",
        campaign: existingCampaign,
      })
    }
    catch {
      console.error(error);
      res.status(500).json({
        message: "Une est survenue lors de la mise à jour de la campagne",
        error: error.message,
      });
    }
  },

  deleteCampaign: async function (req, res) {
    try {
      const campaignId = req.params.campaignid;
      const existingCampaign = await Campaign.findByPk(campaignId);

      if (!existingCampaign) {
        return res.status(404).json({
          message: "Campagne introuvable",
        });
      }

      await existingCampaign.destroy()
      res.status(204).json({
        message: "Campagne supprimée avec succès"
      })

    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur est survenue lors de la suppression de la campagne",
        error: error.message,
      });
    }
  },
addTier: async function (req, res) {
  try {
    const newTier = req.body;
    const existingRelation = await TierHasCampaign.findOne({where: {
              [Op.and]: [
                { CampaignId: newTier.CampaignId },
                { TierId: newTier.TierId }
              ]
            }
          });

    if (existingRelation) {
        res.json({
          message: "La relation existe déjà."
        })
    } else {
      const createTier = await TierHasCampaign.create(newTier);
      res.status(202).json({
        message: "La relation a été créée."
      })
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur est survenue",
      error: error.message,
    });
  }
}
};

export default campaignControler;