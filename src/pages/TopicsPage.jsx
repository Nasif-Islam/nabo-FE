import useFetch from "../hooks/useFetch";
import TopicsList from "../components/TopicsList";

const TopicsPage = () => {
  const { data, isLoading, isError } = useFetch("/topics");

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>Error: Something went wrong</p>;

  const { topics } = data;

  return <TopicsList topics={topics} />;
};

export default TopicsPage;
