import useFetch from "../hooks/useFetch";
import TopicsList from "../components/TopicsList";

const TopicsPage = () => {
  const { data, isLoading, error } = useFetch("/topics");

  if (isLoading) return <p>Loading</p>;
  if (error) return <p>Error: Something went wrong</p>;

  const { topics } = data;

  return <TopicsList topics={topics} />;
};

export default TopicsPage;
