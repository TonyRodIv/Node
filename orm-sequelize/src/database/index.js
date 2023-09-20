const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const tbConfig = require('../config/database');
const User = require('../models/User');
const connection = new Sequelize(dbConfig);
module.exports = connection;
User.init(connection);

// ORM SEQUELIZE É uma biblioteca de mapeamento objeto-relacional (ORM) para Node.js