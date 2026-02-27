import TopicCard from "./TopicCard";

const TopicsList = ({ topics }) => (
  <section className="topics-list">
    {topics.map((topic) => (
      <TopicCard key={topic.slug} topic={topic} />
    ))}
  </section>
);

export default TopicsList;
