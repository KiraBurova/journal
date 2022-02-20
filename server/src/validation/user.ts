import joi from 'joi'

export const UserRegistrationSchema = joi.object({
    username: joi.string().max(20).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
})

export const UserLoginSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
})
