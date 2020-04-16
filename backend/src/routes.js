const express = require('express');
const authMiddleware = require('./middlewares/auth');

const UserController = require('./controllers/UserController');
const HairdressController = require('./controllers/HairdressController');
const ServiceController = require('./controllers/ServiceController');
const MarkedCareController = require('./controllers/MarkedCareController');
const AuthenticationController = require('./controllers/AuthenticationController');


const routes = express.Router();

routes.get('/users',authMiddleware,UserController.index);
routes.post('/users',UserController.store);

routes.get('/hairdress',authMiddleware,HairdressController.index);
routes.post('/hairdress',HairdressController.store);

routes.get('/service/:hair_id',authMiddleware,ServiceController.index);
routes.post('/service/:hair_id',authMiddleware,ServiceController.store);

routes.get('/markedcare/:hairdress_id',authMiddleware,MarkedCareController.index);
routes.post('/markedcare',authMiddleware,MarkedCareController.store);

routes.post('/authenticationuser',AuthenticationController.registerUsers);
routes.post('/authenticationhairdress',AuthenticationController.registerHairdress);



module.exports = routes;