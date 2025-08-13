const express = require('express');
const router = express.Router();  

const cardControllers = require('../controllers/cards');

router.get('/projects', cardControllers.getAllCards);

module.exports = router;