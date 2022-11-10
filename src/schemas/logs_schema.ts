import Joi from 'joi';

export const logSchema = Joi.object({
    id: Joi.number(),
    name:Joi.string().required(),
    image: Joi.string(),
    platform: Joi.string().required(),
    genre: Joi.string().required(),
    status: Joi.string(),
    review: Joi.string(),
    rating: Joi.number()
});