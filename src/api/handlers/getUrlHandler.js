const db = require('../../services/MongoDBServices');
const UrlValidator = require('../../validator/url');

module.exports = async (req, res, next) => {
  try {
    const { query } = req;
    UrlValidator.validateFindUrl(query);
    const urlAlias = query.alias;
    const urlSearch = await db.findUrl(urlAlias);
    res.send(urlSearch);
  } catch (e) {
    next(e);
  }
};
