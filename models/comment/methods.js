module.exports = (commentSchema) => {
  commentSchema.methods.addComment = async function addComment(comment) {
    await this.create(comment);
  };
};

module.exports = (commentSchema) => {
  commentSchema.methods.updateComment = async function updateComment(id, comment, options) {
  const query = { _id: id };
  const update = {
    author: comment.author
  };
  await this.findOneAndUpdate(query, update, options);
};
};

module.exports = (commentSchema) => {
  commentSchema.methods.removeComment = async function removeComment(id) {
    const query = { _id: id };
    await this.findOneAndDelete(query);
  };
};