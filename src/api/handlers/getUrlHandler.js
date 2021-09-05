const mongoose = require('mongoose');
const links = require('../../models/Links');
const FindUrlValidator = require('../../validator/find');

module.exports = async (req, res, next) => {
  try {
    const { query } = req;
    FindUrlValidator.validateFindUrl(query);
    const { MONGODB_URI } = process.env;
    mongoose.connect(
      MONGODB_URI,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      },
    );
    const urlAlias = query.alias;
    const urlSearch = await links.findOne({ alias: urlAlias });
    res.send(urlSearch);
  } catch (e) {
    next(e);
  }
};
