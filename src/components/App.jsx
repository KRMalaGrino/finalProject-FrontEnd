// react
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
// context
import CurrentUserContext from "../contexts/CurrentUserContext";
// utils
import { APIkey } from "../utils/constants";
import { getNews, filterSearchResults } from "../utils/newsApi";
import * as api from "../utils/api";
import * as auth from "../utils/auth";
// components
import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Preloader from "./Preloader/Preloader";
import LoginModal from "./LoginModal/LoginModal";
import RegisterModal from "./RegisterModal/RegisterModal";
import ModalWithForm from "./ModalWithForm/ModalWithForm";

function App() {
  // use states
  const [activeModal, setActiveModal] = useState("");
  const [userData, setUserData] = useState({
    _id: "",
    username: "",
    email: "",
  });
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const openRegisterModal = () => {
    setActiveModal("register");
  };

  const openLoginModal = () => {
    setActiveModal("login");
  };

  const openLogoutModal = () => {
    setActiveModal("logout");
  };

  const openEditProfileModal = () => {
    setActiveModal("edit-profile");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  // handle register
  const handleRegistration = ({ email, password, username }) => {
    setRegisterError("");
  };

  // handle sign in
  const handleSignin = ({ email, password }) => {};

  // handle sign out
  const handleSignOut = () => {
    setIsSignedIn(false);
    closeActiveModal();
    navigate("/");
  };

  // use effect for checking if user is logged in

  // use effect for getting the news
  useEffect(() => {
    getNews(APIkey)
      .then((data) => {
        filterSearchResults(data);
      })
      .catch(console.error);
  }, []);

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
          isOpen={activeModal === "login" || activeModal === "register"}
          closeActiveModal={closeActiveModal}
        />
        <LoginModal
          isOpen={activeModal === "login"}
          openRegisterModal={openRegisterModal}
        />
        <RegisterModal
          isOpen={activeModal === "register"}
          openLoginModal={openLoginModal}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
