import { useNavigate } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const { article_id, title, author, topic, votes, comment_count, created_at, article_img_url } =
    article;

  const navigate = useNavigate();

  const formattedDate = new Date(created_at).toLocaleDateString("en-Gb", {
    day: "2-numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="article-card" onClick={() => navigate(`/articles/${article_id}`)}>
      <div className="article-card-header">
        <div className="article-card-meta">
          <h2 className="article-card-title">{title}</h2>
          <p className="article-card-author">By {author}</p>
        </div>
        <span className="article-card-topic">{topic}</span>
      </div>

      <img className="article-card-image" src={article_img_url} alt={title} />

      <div className="article-card-footer">
        <span>{votes}</span>
        <span>{comment_count} comments</span>
        <span>{formattedDate}</span>
      </div>
    </article>
  );
};

export default ArticleCard;
