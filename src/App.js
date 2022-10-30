import {
  createBrowserRouter, RouterProvider,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Layout from "./pages/Layout"
import LayoutOther from "./pages/LayoutOther"
import Second from "./pages/Second"
import Third from "./pages/Third"
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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "o-nas",
        element: <Second />,
      },
      {
        path: "clanek",
        element: <Article />,
      },
    ]
  },

]);


//       <RouterProvider router={router} />
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<MainPage />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third/:number" element={<Third />} />
          <Route path="/aktuality" element={<ArticleList />} />
          <Route path="/clanek" element={<Article />} />
          <Route path="/uzitecne-odkazy" element={<Links />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/kontakty" element={<Contacts />} />
          <Route path="/autor" element={<UserArticles />} />
          <Route path="/searched/:searchString" element={<Searched />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
