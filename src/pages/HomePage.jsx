import useFetch from "../hooks/useFetch";
import ArticleList from "../components/ArticleList";
import { useSearchParams } from "react-router-dom";
import SortControls from "../components/SortControls";
import OrderControls from "../components/OrderControls";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "DESC";

  const handleSortChange = (newSortBy) => {
    setSearchParams({ sort_by: newSortBy, order: order });
  };

  const handleOrderChange = (newOrder) => {
    setSearchParams({ sort_by: sortBy, order: newOrder });
  };

  const { data, isLoading, isError } = useFetch(`/articles?sort_by=${sortBy}&order=${order}`);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: Something went wrong</p>;

  const { articles } = data;
  if (articles.length === 0) return <p>No articles found</p>;

  return (
    <>
      <SortControls sortBy={sortBy} setSortBy={handleSortChange} />
      <OrderControls order={order} setOrder={handleOrderChange} />
      <ArticleList articles={articles} />
    </>
  );
};

export default HomePage;
