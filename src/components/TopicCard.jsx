import { useNavigate } from "react-router-dom";

const TopicCard = ({ topic }) => {
  const { slug, description, img_url } = topic;
  const navigate = useNavigate();

  return (
    <article className="topic-card" onClick={() => navigate(`/topics/${slug}`)}>
      <div className="topic-card-title">{slug.toUpperCase()}</div>
      <img className="topic-card-image" src={img_url} alt={slug} />
      <p className="topic-card-description">{description}</p>
    </article>
  );
};

export default TopicCard;
