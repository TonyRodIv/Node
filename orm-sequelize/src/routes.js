const express = require('express');
const UserController = require('./controllers/UserController');

const router = express.Router();

routes.post('/users', UserController.store);

module.exports = router