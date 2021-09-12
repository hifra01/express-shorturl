const { nanoid } = require('nanoid');
const db = require('../../services/MongoDBServices');
const UrlValidator = require('../../validator/url');

module.exports = async (req, res, next) => {
  try {
    UrlValidator.validateAddUrl(req.body);
    const { url } = req.body;
    const urlAlias = req.body.alias || nanoid(6);
    await db.checkAliasAvailability(urlAlias);
    const { alias } = await db.addAlias(url, urlAlias);
    res.send({
      status: 'success',
      alias,
    });
  } catch (e) {
    next(e);
  }
};
