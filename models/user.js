const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, require:true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require:true }
});

userSchema.plugin(passportLocalMongoose);

const User = module.exports = mongoose.model('User', userSchema);

// module.exports.getUser    = function(id, callback) {
//     User.findById(id, callback);
// };

// module.exports.updateUser = function(id, user, options, callback) {
//     let query = {_id: id};
//     let update = {
//         username: user.username,
//         email: user.email,
//         password: user.password
//     };
//     User.findOneAndUpdate(query, update, options, callback);
// };

// module.exports.removeUser = function(id, callback) {
//     let query = {_id: id};
//     User.findOneAndDelete(query, callback);
// };