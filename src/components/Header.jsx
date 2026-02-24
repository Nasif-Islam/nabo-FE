const Header = ({ darkMode, onToggleDark, user }) => {
  return (
    <header>
      <div>
        <img src={user.avatar_url} alt={`Avatar of ${user.name}`} />
        <p>{user.name}</p>
      </div>
      <h1>Nabo</h1>
      <button onClick={onToggleDark}>{darkMode ? "☀️" : "🌙"}</button>
    </header>
  );
};

export default Header;
