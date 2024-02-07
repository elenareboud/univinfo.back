import Bind from '../models/bind.js';
import Contact from '../models/contact.js';
import Tier from '../models/tier.js';
import Exchange from '../models/exchange.js';
import { Op } from 'sequelize';

const contactController = {
  all: async function (req, res) {
    try {
      const contacts = await Contact.findAll();
      res.json(contacts);
    }
    catch (error) {
      console.error(error);
      res.status(500).render('error');
    }
  },
  findById: async function (req, res) {
    try {
      const contactId = req.params.contactId;
      const existingContact = await Contact.findByPk(contactId);
      // Vérifier si Contact existe
      if (!existingContact) {
        return res.status(404).json({
          message: "Contact introuvable",
        });
      }
      // Réponse envoyant les données du contact
      res.status(200).json(existingContact);
  
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur est survenue",
        error: error.message, // Vous pouvez renvoyer le message d'erreur pour aider à déboguer
      });
    }
  },
  details: async function (req, res) {
    try {
      const contactId = req.params.id;
      const contact = await Contact.findOne({
        where: { id: contactId },//Operateur Sequelize
        include: [
          { model: Exchange },
          { model: Bind, include: { model: Tier } } // Inclure les données de la table Bind
        ],
      });

      if (contact) {
        res.json(contact);
      } else {
        res.status(404).json({ message: "aucun résultat" });
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "une erreur est survenue" });
    }
  },
  findByName: async function (req, res) {
    try {
      const name = req.params.name;
      const contacts = await Contact.findAll({
        where: {
          [Op.or]: [
            { firstname: { [Op.iLike]: name + "%" } },//ilike permet d'etre insensible aux majuscules
            { lastname: { [Op.iLike]: name + "%" } },
          ],
        },
        include: { model: Bind, include: { model: Tier } } // Inclure les données de la table bind et tier pour trouver le nom de la sociétée
      });

      if (contacts) {
        res.json(contacts);
      } else {
        res.status(404).json({ message: "aucun résultat" });
      }

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "une erreur est survenue" });
    }
  },
  addContact: async function (req, res) {
    try {
        const newContact = req.body;
        const createContact = await Contact.create(newContact);
        res.status(201).json({
            success: true,
            message: "Contact a été ajouté avec succès",
            contact: createContact,
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Une erreur est survenue lors de la création du contact",
            error: error.message,
        });
    }
},
  updateContact: async function (req, res) {
    try {
      const contactId = req.params.contactId;
      const updatedContactData = req.body;
      const existingContact = await Contact.findByPk(contactId);
      //Vérifier si Contact existe
      if(!existingContact) {
        return res.status(404).json({
          message: "Contact introuvable",
        });
    }
    // Mettre à jour les attributs du Contact existant avec les nouvelles données
    await existingContact.update(updatedContactData);
    // Réponse indiquant que le contact a été mis à jour avec succès
    res.status(202).json({
      message: "Contact a été mis à jour avec succès",
      contact: existingContact, // Vous pouvez renvoyer le Contact mis à jour dans la réponse
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur est survenue lors de la mise à jour du contact",
      error: error.message, // Vous pouvez renvoyer le message d'erreur pour aider à déboguer
    });
  }
},
deleteContact: async function (req, res) {
  try {
    const contactId = req.params.contactId;
    const existingContact = await Contact.findByPk(contactId);
    const existingBind = await Bind.findOne({where:{ContactId:contactId}})
    const existingExchange = await Exchange.findOne({where:{ContactId:contactId}})
    //si une ou des liaisons existe on la supprime
    if (existingBind) {
      await Bind.destroy({where:{ContactId:contactId}})
    }
    //pareill pour les echange

    if (existingExchange) {
      await Exchange.destroy({where:{ContactId:contactId}})
    }
    //on fini biensur par le contact lui meme
    if (existingContact) {
      await existingContact.destroy()
    }
    

    res.status(204).json({
      message: "Contact a été supprimé avec succès",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Une erreur est survenue lors de la suppresion du contact",
      error: error.message, // Vous pouvez renvoyer le message d'erreur pour aider à déboguer
    });
  }
}

};

export default contactController;

