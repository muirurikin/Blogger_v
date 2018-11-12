module.exports = (UserSchema) => {
  UserSchema.methods.getUser = async function getUser(id) {
    const user = await this.findById(id).exec();
  }
}

module.exports = (UserSchema) => {
  UserSchema.methods.updateUser = async function updateUser(id, user, options) {
  const query = { _id: id };
  const update = {
    username: user.username,
    email: user.email,
    password: user.password,
  };
  await this.findOneAndUpdate(query, update, options);
};
};

module.exports = (UserSchema) => {
  UserSchema.methods.removeUser = async function removeUser(id) {
    const query = { _id: id };
    await this.findOneAndDelete(query);
  } 
}