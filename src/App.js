import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Layout from "./pages/Layout"
import ErrorPage from "./pages/Error"
import NotFound from "./pages/NotFound"
import './index.css';
import MainPage from "./pages/MainPage";
import ArticleList from "./pages/ArticleList";
import Article from "./pages/Article";
import Links from "./pages/Links";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import UserArticles from "./pages/UserArticles";
import Searched from "./pages/Searched";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path="/aktuality" element={<ArticleList />} />
          <Route path="/clanek" element={<Article />} />
          <Route path="/uzitecne-odkazy" element={<Links />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/kontakty" element={<Contacts />} />
          <Route path="/autor/:name" element={<UserArticles />} />
          <Route path="/searched/:searchString" element={<Searched />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
