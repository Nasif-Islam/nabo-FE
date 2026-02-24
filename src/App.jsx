import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/Navbar";
import ArticleList from "./components/ArticleList";
import ArticleCard from "./components/ArticleCard";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
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
