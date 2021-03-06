import { ObjectId } from 'mongodb'
import * as mongoose from 'mongoose'
const { Schema } = mongoose

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    _id: {
        type: ObjectId,
    },
})

export const UserModel = mongoose.model('User', UserSchema)
