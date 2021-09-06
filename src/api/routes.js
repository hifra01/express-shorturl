const express = require('express');
const getUrlHandler = require('./handlers/getUrlHandler');
const addUrlHandler = require('./handlers/addUrlHandler');

const router = express.Router();

router.get('/find', getUrlHandler);
router.post('/add', addUrlHandler);

module.exports = router;
