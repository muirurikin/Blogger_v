const UserSchema = require('./schema');
const { getUser, updateUser, removeUser } = require('./methods');
module.exports = {
  UserSchema,
  getUser,
  updateUser,
  removeUser,
};
