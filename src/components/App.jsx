import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import CurrentUserContext from "../contexts/CurrentUserContext";

import newsApi from "../utils/newsApi";

import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Preloader from "./Preloader/Preloader";
import LoginModal from "./LoginModal/LoginModal";
import RegisterModal from "./RegisterModal/RegisterModal";
import ModalWithForm from "./ModalWithForm/ModalWithForm";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  const openLoginModal = () => {
    setActiveModal("login");
  };

  const openLogoutModal = () => {
    setActiveModal("logout");
  };

  const openRegisterModal = () => {
    setActiveModal("register");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  // handle register
  const handleRegistration = ({ email, password, username }) => {};

  // handle sign in
  const handleSignin = ({ email, password }) => {};

  // handle sign out
  const handleSignOut = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  // use effect for checking if user is logged in

  return (
    <CurrentUserContext.Provider value={{ currentUser: isSignedIn }}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={<Header openLoginModal={openLoginModal} />}
          />
          <Route
            path="/saved-news"
            element={
              <>
                <Main />
              </>
            }
          />
        </Routes>
        <About />
        <Footer />
        <Preloader />
        <ModalWithForm
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
        />
        <LoginModal openRegisterModal={openRegisterModal} />
        <RegisterModal openLoginModal={openLoginModal} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
