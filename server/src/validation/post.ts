import joi from 'joi'

export const PostSchema = joi.object({
    title: joi.string().required(),
    content: joi.string().email().required(),
    tags: joi.array().items(joi.string()).default([]),
    image: joi.string(),
})
