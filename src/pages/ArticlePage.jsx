import { useParams } from "react-router-dom";
import ArticleVote from "../components/ArticleVote";
import useFetch from "../hooks/useFetch";
import CommentList from "../components/CommentList";

const ArticlePage = () => {
  const { article_id } = useParams();

  const { data, isLoading, isError } = useFetch(`/articles/${article_id}`);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading article</p>;

  const { article } = data;
  if (!article) return <p>Article not found</p>;

  const formattedDate = new Date(article.created_at).toLocaleDateString("en-GB");

  return (
    <>
      <article className="article-page">
        <img className="article-page-image" src={article.article_img_url} alt={article.title} />
        <div className="article-page-content">
          <h1 className="article-page-title">{article.title}</h1>
          <p className="article-page-meta">
            {article.author} {formattedDate}
          </p>
          <div className="article-page-stats">
            <span className="article-page-topic">{article.topic}</span>
            <ArticleVote article_id={article_id} initialVotes={article.votes} />
            <span>💬 {article.comment_count}</span>
          </div>
          <p className="article-page-body">{article.body}</p>
        </div>
      </article>
      <CommentList article_id={article_id} />
    </>
  );
};

export default ArticlePage;
