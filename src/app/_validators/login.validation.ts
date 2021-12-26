import * as Joi from 'joi';

const login = Joi.object({
    email    : Joi.string().email({ tlds: {allow: false} }).required(),
    password : Joi.string().required().min(8),
})



export default login