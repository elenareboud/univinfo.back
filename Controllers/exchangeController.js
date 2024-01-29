import Exchange from "../MODELS/exchange.js";
import User from "../MODELS/user.js";
import Contact from "../MODELS/contact.js";

const exchangeController = {

    all: async function (req, res) {
        try {
            const exchange = await Exchange.findAll();
            res.json(exchange);
        }
        catch (error) {
            console.error(error);
            res.status(500).render('error');
        }
    },

    details: async function (req, res) {
        try {
            const id = req.params.id;
            const exchange = await Exchange.findAll(
                {
                    where: { ContactId: id },
                    include: [
                        { model: User },
                        { model: Contact }
                    ]
                }
            );

            if (exchange) {
                res.json(exchange);
            } else {
                res.status(404).json({ message: "aucun résultat" });
            }
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "une erreur est survenue" });
        }
    },
    addExchange: async function(req, res) {
        try { 
          const newExchange = req.body; 
          const createdExchange = await Exchange.create(newExchange);
          res.status(201).json({
            message: "L'échange a été ajouté avec succès",
            contact: createdExchange,
          });
    
        } catch (error) {
          console.error(error);
          res.status(500).json({
            message: "Une erreur est survenue lors de la création de l'échange",
            error: error.message, // Vous pouvez renvoyer le message d'erreur pour aider à déboguer
          });
        }
      },

};

export default exchangeController;
