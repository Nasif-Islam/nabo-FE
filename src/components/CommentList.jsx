import useFetch from "../hooks/useFetch";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import { useState, useEffect } from "react";

const CommentList = ({ article_id }) => {
  const { data, isLoading, error } = useFetch(`/articles/${article_id}/comments`);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (data) setComments(data.comments);
  }, [data]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching comments</p>;
  if (comments.length === 0) return <p>No comments</p>;

  return (
    <section className="comments-section">
      <CommentForm article_id={article_id} setComments={setComments} comments={comments} />
      <h2 className="comments-section-title">Comments</h2>
      <ul className="comments-list">
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <CommentCard comment={comment} setComments={setComments} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CommentList;
