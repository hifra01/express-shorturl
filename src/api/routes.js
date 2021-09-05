const express = require('express');
const getUrlHandler = require('./handlers/getUrlHandler');
const NotFoundError = require('../exceptions/NotFoundError');

const router = express.Router();

router.get('/', (req, res, next) => {
  next(new NotFoundError('URL not found'));
});
router.get('/find', getUrlHandler);

module.exports = router;
