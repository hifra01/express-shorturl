const links = require('../models/Links');
const NotFoundError = require('../exceptions/NotFoundError');
const InvariantError = require('../exceptions/InvariantError');

module.exports = {
  findUrl: async (urlAlias) => {
    const result = await links.findOne({ alias: urlAlias });
    if (result !== null) {
      return result;
    }
    throw new NotFoundError('URL not found');
  },
  checkAliasAvailability: async (urlAlias) => {
    const result = await links.exists({ alias: urlAlias });
    if (result) {
      throw new InvariantError(`Alias '${urlAlias}' already exists`);
    }
  },
  addAlias: async (url, alias) => links.create({
    alias,
    url,
  }),
};
