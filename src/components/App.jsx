import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import newsApi from "../utils/newsApi";

import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Preloader from "./Preloader/Preloader";
import LoginModal from "./LoginModal/LoginModal";
import RegisterModal from "./RegisterModal/RegisterModal";
import ModalWithForm from "./ModalWithForm/ModalWIthForm";

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

  // handle sign in
  // const handleSignin = ({ email, password }) => {
  //   return // finish code call to the auth . something . then
  //   .then(() => {

  //   }).then(() => {

  //   }).catch(console.error);
  // };

  // handle sign out
  // const handleSignOut = () => {
  //   setIsLoggedIn(false);
  //   navigate("/");
  // };

  // use effect for checking if user is logged in

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />} />
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
      <ModalWithForm />
      <LoginModal />
      <RegisterModal />
    </div>
  );
}

export default App;
