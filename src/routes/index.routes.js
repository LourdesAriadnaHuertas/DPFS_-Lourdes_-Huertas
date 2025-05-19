const express = require('express');
const {home} = require('../controllers/index.controller');
const router = express.Router();

//vista home
router.get('/', home)

module.exports = router