const { nanoid } = require('nanoid');
const db = require('../../services/MongoDBServices');
const UrlValidator = require('../../validator/url');
const checkAbsoluteUrl = require('../../utils/checkAbsoluteUrl');

module.exports = async (req, res, next) => {
  try {
    UrlValidator.validateAddUrl(req.body);
    let { url } = req.body;
    const alias = req.body.alias || nanoid(6);
    if (!checkAbsoluteUrl(url)) {
      url = `https://${url}`;
    }
    const data = await db.addAlias(url, alias);
    res.send({
      status: 'success',
      data,
    });
  } catch (e) {
    next(e);
  }
};
