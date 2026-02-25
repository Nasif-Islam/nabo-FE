import { useState } from "react";
import axios from "axios";

const CommentForm = ({ article_id, setComments }) => {
  const [commentBody, setCommentBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    if (commentBody.trim() === "") return;

    setIsSubmitting(true);
    setError(null);

    try {
      const { data } = await axios.post(
        `https://nabo.onrender.com/api/articles/${article_id}/comments`,
        { username: "Nasif", body: commentBody },
      );
      setComments((prevComment) => [data.comment, ...prevComment]);
      setCommentBody("");
    } catch (err) {
      setError("Failed to post comment. Please try again");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      if (commentBody.trim() && !isSubmitting) {
        handleSubmit(e);
      }
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <textarea
        placeholder="Write a comment..."
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={isSubmitting}
        required
      />

      <div className="form-footer">
        {error && <p className="error-text">{error}</p>}
        <button
          className="submit-button"
          type="submit"
          disabled={isSubmitting || commentBody.trim() === ""}
        >
          {isSubmitting ? "Posting..." : "Post"}
        </button>
      </div>
    </form>
  );
};
