const { FindUrlSchema } = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

module.exports = {
  validateFindUrl: (payload) => {
    const validationResult = FindUrlSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};
