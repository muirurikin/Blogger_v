module.exports = (commentSchema) => {
  commentSchema.methods.addComment = async function addComment(comment) {
    await this.create(comment);
  };
};
