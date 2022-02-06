import * as joi from 'joi';

const UserSchema = joi.object({
  username: joi.string().max(20).required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
});

export default UserSchema;
