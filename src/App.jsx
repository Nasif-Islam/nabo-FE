import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import ErrorPage from "./pages/ErrorPage";

const CURRENT_USER = {
  username: "Nasif",
  name: "Nasif Islam",
  avatar_url: "https://avatars.githubusercontent.com/u/178942734?v=4",
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <main className="main-content">
        <Header
          user={CURRENT_USER}
          darkMode={darkMode}
          onToggleDark={() => setDarkMode(!darkMode)}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
