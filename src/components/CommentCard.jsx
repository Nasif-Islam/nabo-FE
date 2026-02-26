const CommentCard = ({ comment }) => {
  const { author, body, votes, created_at } = comment;
  const formattedDate = new Date(created_at).toLocaleDateString("en-GB");

  return (
    <article className="comment-card">
      <div className="comment-card-meta">
        <p className="comment-card-author">{author}</p>
        <span className="comment-card-date">{formattedDate}</span>
      </div>
      <p className="comment-card-body">{body}</p>
      <div className="comment-card-footer">
        <span>{votes >= 0 ? `⬆️ ${votes}` : `⬇️ ${Math.abs(votes)}`}</span>
      </div>
    </article>
  );
};

export default CommentCard;
