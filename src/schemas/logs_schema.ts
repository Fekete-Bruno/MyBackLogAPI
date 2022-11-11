import Joi from 'joi';

export const logSchema = Joi.object({
    id: Joi.number(),
    name:Joi.string().required(),
    image: Joi.string(),
    platform: Joi.string().required(),
    genre: Joi.string().required(),
    status: Joi.string().required(),
    review: Joi.string().allow(null),
    rating: Joi.number().integer().min(0).max(10).allow(null)
});