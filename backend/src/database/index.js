const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Hairdress = require('../models/Hairdress');
const Service = require('../models/Service');
const MarkedCare = require('../models/MarkedCare');
const connection = new Sequelize(dbConfig);


User.init(connection);
Hairdress.init(connection);
Service.init(connection);
MarkedCare.init(connection);

Hairdress.associate(connection.models);
Service.associate(connection.models);
User.associate(connection.models);
//MarkedCare.associate(connection.models);
module.exports = connection;