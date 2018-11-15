module.exports = (commentSchema) => {
  commentSchema.methods.addComment = async function addComment(comment) {
    await this.create(comment);
  };
};

module.exports = (commentSchema) => {
  commentSchema.methods.removeComment = async function removeComment(id) {
    const query = { _id: id };
    await this.findOneAndDelete(query);
  };
};