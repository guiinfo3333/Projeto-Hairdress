const express = require('express');

const UserController = require('./controllers/UserController');
const HairdressController = require('./controllers/HairdressController');
const ServiceController = require('./controllers/ServiceController');
const MarkedCareController = require('./controllers/MarkedCareController');


const routes = express.Router();

routes.get('/users',UserController.index);
routes.post('/users',UserController.store);

routes.get('/hairdress',HairdressController.index);
routes.post('/hairdress',HairdressController.store);

routes.get('/service/:hair_id',ServiceController.index);
routes.post('/service/:hair_id',ServiceController.store);

routes.get('/markedcare/:hairdress_id',MarkedCareController.index);
routes.post('/markedcare',MarkedCareController.store);

module.exports = routes;