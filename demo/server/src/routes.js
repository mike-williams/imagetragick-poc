const express = require('express');
const router = express.Router();

const controller = require('./controller');
router.post('/upload', controller.upload);

module.exports = router;