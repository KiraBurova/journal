import * as mongoose from 'mongoose'
const { Schema } = mongoose

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    tags: {
        type: Array.of(String),
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
})

export const PostModel = mongoose.model('Post', PostSchema)
