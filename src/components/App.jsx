import { useState } from "react";

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
      <SearchForm />
      <Main />
      <NewsCard />
      <About />
      <Footer />
      <Preloader />
      <LoginModal />
      <RegisterModal />
    </div>
  );
}

export default App;
