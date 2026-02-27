import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import { BASE_URL } from "../hooks/useFetch";

const CommentCard = ({ comment, setComments }) => {
  const { author, body, votes, created_at, comment_id } = comment;
  const formattedDate = new Date(created_at).toLocaleDateString("en-GB");
  const { user } = useContext(UserContext);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setError(null);

    try {
      await axios.delete(`${BASE_URL}/comments/${comment_id}`);
      setComments((prevComments) => prevComments.filter((c) => c.comment_id !== comment_id));
    } catch (err) {
      console.log(err);
      setError("Failed to delete comment");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article className="comment-card">
      <div className="comment-card-meta">
        <p className="comment-card-author">{author}</p>
        <span className="comment-card-date">{formattedDate}</span>
      </div>
      <p className="comment-card-body">{body}</p>
      <div className="comment-card-footer">
        <span>{votes >= 0 ? `⬆️ ${votes}` : `⬇️ ${Math.abs(votes)}`}</span>
        {user.username === author && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={isLoading}
            className="delete-button"
          >
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        )}
        {error && <span className="error-message">{error}</span>}
      </div>
    </article>
  );
};

export default CommentCard;
