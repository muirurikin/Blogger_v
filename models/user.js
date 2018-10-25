const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, require:true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require:true }
});

userSchema.plugin(passportLocalMongoose);

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUser = function(id, callback) {
    User.findById(id, callback);
};

module.exports.addUser  = function(user, callback) {
    User.create(user, callback);
};

module.exports.removeUser = function(id, callback) {
    let query = {_id: id};
    User.deleteOne(query, callback);
}