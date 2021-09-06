const links = require('../models/Links');
const NotFoundError = require('../exceptions/NotFoundError');

module.exports = {
  findUrl: async (urlAlias) => {
    const result = await links.findOne({ alias: urlAlias });
    if (result !== null) {
      return result;
    }
    throw new NotFoundError('URL not found');
  },
  addAlias: async (url, alias) => links.create({
    alias,
    url,
  }),
};
