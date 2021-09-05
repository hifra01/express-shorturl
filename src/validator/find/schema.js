const Joi = require('joi');

const FindUrlSchema = Joi.object({
  alias: Joi.string().required(),
});

module.exports = { FindUrlSchema };
