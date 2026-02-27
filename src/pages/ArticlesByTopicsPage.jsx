import useFetch from "../hooks/useFetch";
import ArticleList from "../components/ArticleList";
import { useParams } from "react-router-dom";

const ArticlesByTopicPage = () => {
  const { topic } = useParams();
  const { data, isLoading, error } = useFetch(`/articles?topic=${topic}`);

  if (isLoading) return <p>Loading...</p>;
  if (error?.status === 404) return <p>This topic doesn't exist</p>;
  if (error) return <p>Something went wrong</p>;

  const { articles } = data;
  if (articles.length === 0) return <p>No articles found</p>;

  return (
    <>
      <h1 className="topic-page-title">
        Articles about {topic.charAt(0).toUpperCase() + topic.slice(1)}
      </h1>
      <ArticleList articles={articles} />
    </>
  );
};

export default ArticlesByTopicPage;
