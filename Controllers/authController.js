import jwt from "jsonwebtoken";
import User from "../models/user.js";

const SECRET_KEY = process.env.JWT_SECRET_KEY; // variable d'environnement pour la clé secrète

const authController = {
    login: async function (req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({
                where: { email: email.toLowerCase() },
            });

            if (!user) {
                return res.status(404).json({ message: "Utilisateur non trouvé." });
            }

            const isPasswordValid = await user.comparePassword(password);

            if (isPasswordValid) {
                // Les informations de l'utilisateur sont correctes, génére un token JWT
                const token = jwt.sign({
                    id: user.id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    fonction: user.Groupe.fonction,
                    edit: user.Groupe.Authorisation.edit,
                    make: user.Groupe.Authorisation.make,
                    suppress: user.Groupe.Authorisation.suppress
                },  SECRET_KEY,{
                    expiresIn: "1h",// Définir une durée de validité appropriée pour le token
                });
                
                return res.status(200).json({
                    message: "Authentification réussie",
                    token: token,
                });
            } else {
                // Le mot de passe est incorrect
                return res.status(401).json({ message: "Mot de passe incorrect." });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                message: "Erreur lors de l'authentification",
                error: error.message,
            });
        }
    },
};

export default authController;