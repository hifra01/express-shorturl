const express = require('express');
const addUrlHandler = require('./handlers/addUrlHandler');

const router = express.Router();

router.post('/add', addUrlHandler);

module.exports = router;
