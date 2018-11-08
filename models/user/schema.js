const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

userSchema.plugin(passportLocalMongoose);

module.exports = {
  UserSchema,
};
