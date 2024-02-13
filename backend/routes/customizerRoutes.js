const express = require('express');
const router = express.Router();
const { getCustomizerData, postCustomizerData } = require('../controllers/customizerController');

router.get('/customizer', getCustomizerData);
router.post('/customizer', postCustomizerData);

module.exports = router;
