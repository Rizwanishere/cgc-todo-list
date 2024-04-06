const express = require('express');
const homeController = require('../controller/homeCtrl');

const router = express.Router();

router.get('/',homeController.home);
router.get('/home',homeController.home);
router.get('/health',homeController.health);

module.exports = router;