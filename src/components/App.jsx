import { Route, Routes } from "react-router-dom";

import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import SearchForm from "./SearchForm/SearchForm";
import Main from "./Main/Main";
import NewsCard from "./NewsCard/NewsCard";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Preloader from "./Preloader/Preloader";
import LoginModal from "./LoginModal/LoginModal";
import RegisterModal from "./RegisterModal/RegisterModal";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchForm />
              <Main />
              <NewsCard />
            </>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      <Preloader />
      <LoginModal />
      <RegisterModal />
    </div>
  );
}

export default App;
