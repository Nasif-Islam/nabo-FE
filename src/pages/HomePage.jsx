import axios from "axios";
import { useState, useEffect } from "react";
import ArticleList from "../components/ArticleList";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("https://nabo.onrender.com/api/articles");
        setArticles(response.data.articles);
        console.log(response.data.articles);
      } catch (error) {
        setIsError(true);
        console.error("Error fetching articles:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchArticles();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: Something went wrong</p>;

  return <ArticleList articles={articles} />;
};

export default HomePage;
