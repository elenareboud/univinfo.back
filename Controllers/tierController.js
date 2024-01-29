import Contact from "../MODELS/contact.js";
import Bind from "../MODELS/bind.js";
import Tier from "../MODELS/tier.js";
import { Op } from "sequelize";
import Campaign from "../MODELS/campaign.js";
import TierHasCampaign from "../MODELS/tierhascampaign.js";




const tierController = {

  all: async function (req, res) {
    try {
      const tiers = await Tier.findAll();
      res.send(tiers);
    }
    catch (error) {
      console.error(error);
      res.status(500).render('error');
    }
  },
  findByName: async function (req, res) {
    try {
      const name = req.params.name;
      const tiers = await Tier.findAll({
        where: { social_reason: { [Op.iLike]: name + "%" } },//ilike permet d'etre insensible aux majuscules
      });

      if (tiers) {
        res.json(tiers);
      } else {
        res.status(404).json({ message: "Aucun résultat" });
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "une erreur est survenue" });
    }
  },
  details: async function (req, res) {
    try {
      const tierId = req.params.id;
      const tiers = await Tier.findOne({
        where: { id: tierId },
        include: [
          { model: TierHasCampaign, include: { model: Campaign } },
          { model: Bind, include: { model: Contact } } // Inclure les données de la table Bind
        ],
      });
      if (tiers) {
        res.json(tiers);
      } else {
        res.status(404).json({ message: "Aucun résultat" });
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur est survenue",
        error: error.message
      });
    }
  },
  addTier: async function (req, res) {
    try {

      const newTier = req.body;
      const createTier = await Tier.create(newTier);
      res.status(201).json({
        message: "Tiers ajouté avec succès.",
        tier: createTier,
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur est survenue lors de la création du tier",
        error: error.message
      });
    }
  },
  updateTier: async function (req, res) {
    try {
      const tierId = req.params.tierid;
      const updatedTierData = req.body;
      const existingTier = await Tier.findByPk(tierId);
      // Vérifier si le Tier existe
      if (!existingTier) {
        return res.status(404).json({
          message: "Tier introuvable",
        });
      }
      // Mettre à jour les attributs du tier existant avec les nouvelles données
      await existingTier.update(updatedTierData);
      // Réponse indiquant que le tier a été mis à jour avec succès
      res.status(202).json({
        message: "Tiers mis à jour avec succès",
        tier: existingTier, // Vous pouvez renvoyer le tier mis à jour dans la réponse
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur est survenue lors de la mise à jour du tier",
        error: error.message, // Vous pouvez renvoyer le message d'erreur pour aider à déboguer
      });
    }
  },
  deleteTier: async function (req, res) {
    try {
      const tierId = req.params.tierid;
      const existingTier = await Tier.findByPk(tierId);
      const existingBind = await Bind.findOne({ where: { TierId: tierId } });
      const existingCampaign = await TierHasCampaign.findOne({ where: { TierId: tierId } });

      if (existingCampaign) {
        await TierHasCampaign.destroy({ where: { TierId: tierId } });
      }
      if (existingBind) {
        await Bind.destroy({ where: { TierId: tierId } });
      }
      if (existingTier) {
        await existingTier.destroy();
      }
      // Réponse indiquant que le tier a été supprimer avec succès
      res.status(204).json({
        message: "Tiers supprimer avec succès",
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur est survenue lors de la suppresion du tier",
        error: error.message, // Vous pouvez renvoyer le message d'erreur pour aider à déboguer
      });
    }
  },

  addContact: async function (req, res) {
    try {
      const newContact = req.body;
      const existingRelation = await Bind.findOne({
        where: {
        [Op.and]: [
        { TierId: newContact.TierId },
        { ContactId: newContact.ContactId }
      ]
      }
  });

  if (existingRelation) {
    res.json({
      message: "La relation existe déjà."
    })
  } else {
    const createContact = await Bind.create(newContact);
    res.status(202).json({
      message: "La relation a été créée."
    })
  }


 

    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur est survenue ",
        error: error.message,
      });
    }
  }
};



export default tierController;