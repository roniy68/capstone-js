const countComments = () => {
  const comment = document.querySelectorAll('.comment-text');
  return comment.length;
};

export default countComments;