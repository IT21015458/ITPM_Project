/*import './App.css';*/
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationPage from './components/NavigationPage'
import SignINForm from './components/SignINForm'
import SignUPForm from './components/SignUPForm'
import Home from "./components/HomePage";
import ArticleView from "./Pages/ArticleView";
import AddArticles from "./Pages/AddArticles";
import ArticleList from "./Pages/ArticleList";
import UpdateArticle from "./Pages/UpdateArticle";
import ViewArticle from "./Pages/ViewArticle";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/" element={<NavigationPage/>} /> */}
          <Route exact path="/signin" element={<SignINForm />} />
          <Route exact path="/signup" element={<SignUPForm />} />
          <Route exact path="/articleView" element={<ArticleView />} />
          <Route exact path="/addArticles" element={<AddArticles />} />
          <Route exact path="/listArticles" element={<ArticleList />} />
          <Route exact path="/updateArticles" element={<UpdateArticle />} />
          <Route exact path="/viewArticle" element={<ViewArticle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
