import Authorisation from "../models/authorisation.js";
import Groupe from "../models/groupe.js";

const groupController = {

    alldetails: async function (req, res) {
        try {
            const groupes = await Groupe.findAll({

                    include: {
                        model: Authorisation
                    }

            });
            res.json(groupes);
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Une erreur est survenue."
            });
        }
    },
    addGroup: async function (req, res) {
        try {
            const newGroup = req.body;
            const createGroup = await Groupe.create({
                fonction: newGroup.fonction,
                Authorisation: { // majuscule ? 
                    make: newGroup.make,
                    edit: newGroup.edit,
                    suppress: newGroup.suppress
                },
            }, { 
                include: [
                    { model: Authorisation }
                ],
            });
            if (createGroup) {
                res.json({ message: "groupe créé avec succès" });
            } else {
                res.status(404).json({ message: "Aucun résultat" });
            }

        } catch (error) {
            res.status(500).json({
                message: "Une erreur est survenue.",
                error: error.message
            });
        }
    },
};

export default groupController;