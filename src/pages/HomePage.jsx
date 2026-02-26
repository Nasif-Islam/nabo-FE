import useFetch from "../hooks/useFetch";
import ArticleList from "../components/ArticleList";

const HomePage = () => {
  const { data, isLoading, isError } = useFetch("/articles");

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: Something went wrong</p>;

  const { articles } = data;
  if (articles.length === 0) return <p>No articles found</p>;

  return <ArticleList articles={articles} />;
};

export default HomePage;
