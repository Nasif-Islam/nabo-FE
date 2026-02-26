import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { BASE_URL } from "../hooks/useFetch";

const CommentForm = ({ article_id, setComments, comments }) => {
  const [commentBody, setCommentBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (commentBody.trim() === "") return;

    const originalComments = [...comments];
    const optimisticComment = {
      comment_id: Date.now(),
      article_id: article_id,
      body: commentBody,
      votes: 0,
      author: user.username,
      created_at: new Date().toISOString(),
    };

    setIsSubmitting(true);
    setError(null);
    try {
      setComments([optimisticComment, ...originalComments]);

      const { data } = await axios.post(`${BASE_URL}/articles/${article_id}/comments`, {
        username: user.username,
        body: commentBody,
      });

      if (data) setComments([data.comment, ...originalComments]);
      setCommentBody("");
    } catch (err) {
      console.log(err);
      setComments(originalComments);
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

export default CommentForm;
