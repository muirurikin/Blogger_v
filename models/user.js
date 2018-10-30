const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;

module.exports.getUser = (id, callback) => {
  User.findById(id, callback);
};

module.exports.updateUser = (id, user, options, callback) => {
  const query = { _id: id };
  const update = {
    username: user.username,
    email: user.email,
    password: user.password,
  };
  User.findOneAndUpdate(query, update, options, callback);
};

module.exports.removeUser = (id, callback) => {
  const query = { _id: id };
  User.findOneAndDelete(query, callback);
};
