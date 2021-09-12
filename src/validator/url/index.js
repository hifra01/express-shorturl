const { AddUrlSchema } = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

module.exports = {
  validateAddUrl: (payload) => {
    const validationResult = AddUrlSchema.validate(payload, { convert: false });
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};
