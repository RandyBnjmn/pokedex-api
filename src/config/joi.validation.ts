import * as Joi from 'joi';

export const ValidationSchema = Joi.object({
  MONGODB: Joi.required(),
  PORT: Joi.number().default(3004),
  DEFAULT_LIMIT: Joi.number().default(15),
});
