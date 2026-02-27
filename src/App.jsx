import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import ErrorPage from "./pages/ErrorPage";
import TopicsPage from "./pages/TopicsPage";
import ArticlesByTopicPage from "./pages/ArticlesByTopicsPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <BrowserRouter>
      <main className="main-content">
        <Header darkMode={darkMode} onToggleDark={() => setDarkMode(!darkMode)} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles/:article_id" element={<ArticlePage />} />
          <Route path="/topics" element={<TopicsPage />} />
          <Route path="/topics/:topic" element={<ArticlesByTopicPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
