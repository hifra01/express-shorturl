const Joi = require('joi');

const FindUrlSchema = Joi.object({
  alias: Joi.string()
    .required(),
});

const AddUrlSchema = Joi.object({
  url: Joi.string()
    .uri({ allowRelative: true })
    .required(),
  alias: Joi.string()
    .trim()
    .regex(/^[\w-]+$/),
});

module.exports = {
  FindUrlSchema,
  AddUrlSchema,
};
