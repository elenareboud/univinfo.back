import Authorisation from '../models/authorisation.js';
import Groupe from '../models/groupe.js';
import User from '../models/user.js';

const userController = {

  all: async function (req, res) {
    try {
      const users = await User.findAll();
      res.json(users);
    }
    catch (error) {
      console.error(error);
      res.status(500);
    }
  },
  alldetails: async function (req, res) {
    try {
      const users = await User.findAll({
        include: {
          model: Groupe,
          include: {
            model: Authorisation
          }
        }
      });
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur est survenue."
      });
    }
  },
  addUser: async function (req, res) {
    try {
      const newUser = req.body;
      const createUser = await User.create({
        lastname: newUser.lastname,
        firstname: newUser.firstname,
        password: newUser.password,
        email: newUser.email.toLowerCase(),
        GroupeId: newUser.groupe_id
      });
      res.status(201).json({
        message: "Utilisateur ajouté avec succès.",
        user: createUser,
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur est survenue.",
        error: error.message
      });
    }
  },
  findById: async function (req, res) {
    try {
      const userId = req.params.userid;
      const existingUser = await User.findByPk(userId);

      if (!existingUser) {
        return res.status(404).json({
          message: "Utilisateur introuvable.",
        });
      }

      res.status(200).json(existingUser)

    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur est survenue.",
        error: error.message,
      });
    }
  },
  userUpdate: async function (req, res) {
    try {
      const userId = req.params.userid;
      const updatedUserData = req.body;
      const existingUser = await User.findByPk(userId);

      if (!existingUser) {
        return res.status(404).json({
          message: "Utilisateur introuvable.",
        });
      }
      await existingUser.update(updatedUserData);

      res.status(202).json({
        message: "Utilisateur mis à jour.",
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur est survenue lors de la mise à jour.",
        error: error.message,
      });
    }
  },

};

export default userController;