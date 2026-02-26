import useFetch from "../hooks/useFetch";
import CommentCard from "./CommentCard";

const CommentList = ({ article_id }) => {
  const { data, isLoading, isError } = useFetch(`/articles/${article_id}/comments`);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching comments</p>;

  const { comments } = data;
  if (comments.length === 0) return <p>No comments</p>;

  return (
    <section className="comments-section">
      <h2 className="comments-section-title">Comments</h2>
      <ul className="comments-list">
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <CommentCard comment={comment} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CommentList;
