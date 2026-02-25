import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ArticleVote from "../components/ArticleVote";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await axios.get(`https://nabo.onrender.com/api/articles/${article_id}`);
        setArticle(response.data.article);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading article</p>;

  const formattedDate = new Date(article.created_at).toLocaleDateString("en-GB");

  return (
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
  );
};

export default ArticlePage;
