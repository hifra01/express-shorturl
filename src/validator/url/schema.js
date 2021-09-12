const Joi = require('joi');

const AddUrlSchema = Joi.object({
  url: Joi.string()
    .uri()
    .required(),
  alias: Joi.string()
    .trim()
    .allow('')
    .regex(/^[\w-]+$/),
});

module.exports = {
  AddUrlSchema,
};
