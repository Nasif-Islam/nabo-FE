import { useState } from "react";
import axios from "axios";

const ArticleVote = ({ article_id, initialVotes }) => {
  const [votes, setVotes] = useState(initialVotes);
  const [userVote, setUserVotes] = useState(0);
  const [error, setError] = useState(null);

  const handleVote = async (direction) => {
    let increment = 0;
    const originalVotes = votes;
    const originalUserVote = userVote;

    if (userVote === direction) {
      increment = -direction;
    } else if (userVote === 0) {
      increment = direction;
    } else {
      increment = direction * 2;
    }

    setVotes((prevVotes) => prevVotes + increment);
    setUserVotes((prevUserVote) => (prevUserVote === direction ? 0 : direction));
    setError(null);

    try {
      await axios.patch(`https://nabo.onrender.com/api/articles/${article_id}`, {
        inc_votes: increment,
      });
    } catch (err) {
      console.log(err);
      setVotes(originalVotes);
      setUserVotes(originalUserVote);
      setError("Failed to update vote. Please try again");
    }
  };

  return (
    <div className="article-voter-container">
      <div className="vote-card">
        <button
          className={`vote-button down ${userVote === -1 ? "active-down" : ""}`}
          onClick={() => handleVote(-1)}
        >
          ⬇️
        </button>
        <span className="vote-count">{votes}</span>
        <button
          className={`vote-button up ${userVote === 1 ? "active-up" : ""}`}
          onClick={() => handleVote(1)}
        >
          ⬆️
        </button>
      </div>

      {error && <p className="vote-error-message">{error}</p>}
    </div>
  );
};

export default ArticleVote;
