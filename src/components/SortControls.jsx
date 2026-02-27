const SortControls = ({ sortBy, setSortBy }) => {
  return (
    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
      <option value="created_at">Date</option>
      <option value="votes">Votes</option>
      <option value="comment_count">Comments</option>
    </select>
  );
};

export default SortControls;
