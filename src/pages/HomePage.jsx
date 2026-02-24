import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("https://nabo.onrender.com/api/articles");
        setArticles(response.data);
        console.log(response.data);
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

  return <div>{/* Add logic later */}</div>;
};

export default HomePage;
