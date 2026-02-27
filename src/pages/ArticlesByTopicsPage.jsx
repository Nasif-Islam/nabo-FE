import useFetch from "../hooks/useFetch";
import ArticleList from "../components/ArticleList";
import { useParams } from "react-router-dom";

const ArticlesByTopicPage = () => {
  const { topic } = useParams();
  const { data, isLoading, isError } = useFetch(`/topics/${topic}`);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: Something went wrong</p>;

  const { articles } = data;
  if (articles.length === 0) return <p>No articles found</p>;

  return <ArticleList articles={articles} />;
};

export default ArticlesByTopicPage;
