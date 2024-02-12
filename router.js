import express from "express";
import tierController from './Controllers/tierController.js';
import userController from './Controllers/userController.js';
import contactController from './Controllers/contactController.js';
import exchangeController from './Controllers/exchangeController.js';
import campaignController from './Controllers/campaignController.js';
import groupController from "./Controllers/groupController.js";
import authController from './Controllers/authController.js';

const router = express.Router();

router.use(express.json());

router.post('/api/login', authController.login);

router.get('/api/users', userController.all);
router.get('/api/users/details', userController.alldetails);
router.post('/api/user/create', userController.addUser);
router.get('/api/user/:userid', userController.findById);
router.patch('/api/user/update/:userid', userController.userUpdate);

router.get('/api/group', groupController.alldetails);
router.post('/api/group/creategroup', groupController.addGroup);

router.get('/api/campaigns', campaignController.all);
router.get('/api/campaigns/:name', campaignController.findByName);
router.get('/api/campaigns/details/:id', campaignController.details);
router.post('/api/campaign/create', campaignController.addCampaign);
router.patch('/api/campaign/update/:campaignid', campaignController.updateCampaign);
router.delete('/api/campaign/delete/:campaignid', campaignController.deleteCampaign);
router.post('/api/tierhascampaign', campaignController.addTier);

router.get('/api/tier', tierController.all);
router.get('/api/tier/:name', tierController.findByName);
router.get('/api/tier/details/:id', tierController.details);
router.post('/api/tier/create', tierController.addTier);
router.patch('/api/tier/update/:tierid', tierController.updateTier);
router.delete('/api/tier/delete/:tierid', tierController.deleteTier);
router.post('/api/bind/create', tierController.addContact);

router.get('/api/exchanges', exchangeController.all);
router.get('/api/exchanges/details/:id', exchangeController.details);
router.post('/api/exchange/create', exchangeController.addExchange);

router.get('/api/contacts/all', contactController.all);
router.get('/api/contact/:contactId', contactController.findById);
router.get('/api/contacts/:name', contactController.findByName);
router.get('/api/contact/details/:id', contactController.details);
router.post('/api/contact/create', contactController.addContact);
router.patch('/api/contact/update/:contactId', contactController.updateContact);
router.delete('/api/contact/delete/:contactId', contactController.deleteContact);

export default router;