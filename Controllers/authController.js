import jwt from "jsonwebtoken";
import User from "../MODELS/user.js";
import Groupe from "../MODELS/groupe.js";
import Authorisation from "../MODELS/authorisation.js";

const authController = {
    login: async function (req, res) {
        try {
            // Recherchez l'email de l'utilisateur dans la base de données 
            const user = await User.findOne({
                where: { email: req.body.email.toLowerCase() },
                include: [
                    {
                        model: Groupe,
                        include: {
                            model: Authorisation
                        }
                    }
                ]
            });


            if (user && user.comparePassword(req.body.password)) {
                // Authentification réussie
                // Si l'authentification réussit, créez un token JWT
                const token = jwt.sign({
                    id: user.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    fonction: user.Groupe.fonction,
                    edit: user.Groupe.Authorisation.edit,
                    make: user.Groupe.Authorisation.make,
                    suppress: user.Groupe.Authorisation.suppress
                }, "votre_clé_secrète", {
                    expiresIn: "1h",
                });
                // Réponder avec le token pour qu'il puisse être utilisé côté clien
                res.status(200).json({
                    message: "Authentification réussie",
                    token: token,
                });
            } else {// Si l'utilisateur n'existe pas OU le mot de passe n'est pas identique
                return res.status(401).json({
                    message: "Authentification échouée",
                    error: "Authentification échouée"
                });
            }

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: "Une erreur est survenue lors de l'authentification",
                error: error.message,
            });
        }
    },
};

export default authController;
