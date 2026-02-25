const Header = ({ darkMode, onToggleDark, user }) => {
  return (
    <header className="header">
      <div className="header-user">
        <img className="header-avatar" src={user.avatar_url} alt={`Avatar of ${user.name}`} />
        <span className="header-username">{user.username}</span>
      </div>
      <h1 className="header-logo">Nabo</h1>
      <button className="header-toggle" onClick={onToggleDark}>
        {darkMode ? "☀️" : "🌙"}
      </button>
    </header>
  );
};

export default Header;
