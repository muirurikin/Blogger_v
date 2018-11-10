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

module.exports = (UserSchema) => {
  UserSchema.methods.getUser = async function getUser(id) {
    const user = await this.findById({ id }).exec()
  }
}