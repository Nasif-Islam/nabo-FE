import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import ArticleCard from "./components/ArticleCard";
import ErrorPage from "./components/ErrorPage";

function App() {
  const CURRENT_USER = {
    username: "nasif",
    name: "Nasif Islam",
    avatar_url: "https://avatars.githubusercontent.com/u/178942734?v=4",
  };

  return (
    <BrowserRouter>
      <Header CURRENT_USER={CURRENT_USER} />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
