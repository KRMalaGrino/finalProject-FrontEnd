// react
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
// context
import CurrentUserContext from "../contexts/CurrentUserContext";
// utils
// import newsData from "../utils/constants";
import { APIkey } from "../utils/apiUtils";
import * as newsApi from "../utils/newsApi";
import * as api from "../utils/api";
import * as auth from "../utils/auth";
// components
import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import SavedArticles from "./SavedArticles/SavedArticles";
import Footer from "./Footer/Footer";
import Preloader from "./Preloader/Preloader";
import LoginModal from "./LoginModal/LoginModal";
import RegisterModal from "./RegisterModal/RegisterModal";

function App() {
  // use states
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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
  const isSavedArticlesPage = location.pathname === "/saved-articles";

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

  function handleSearch(keyword) {
    setIsLoading(true);
    setErrorMessage("");
    setHasSearched(true);

    newsApi
      .getNews(keyword)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((err) => {
        console.error("Error fetching news:", err.message);
        setErrorMessage("Could not fetch news. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleArticleBookmark = ({ _id, isBookmarked }) => {
    const token = auth.getToken();

    const apiCall = !isBookmarked
      ? api.bookmarkArticle(_id, token)
      : api.unbookmarkArticle(_id, token);

    return apiCall
      .then((updatedCard) => {
        setArticles((prevArticles) =>
          prevArticles.map((item) => (item._id === _id ? updatedCard : item))
        );
        return updatedCard;
      })
      .catch((err) => {
        console.error("Failed to update card like:", err);
        throw err;
      });
  };

  // handle register
  const handleRegistration = ({ email, password, username }) => {
    setRegisterError("");
    return auth
      .signUp(email, password, username)
      .then(() => {
        return handleSignin({ email, password });
      })
      .catch((err) => {
        if (err.status === 409) {
          setRegisterError("User with this email already exists.");
        } else {
          setRegisterError("Registration failed. Please try again.");
        }
      });
  };

  // handle sign in
  const handleSignin = ({ email, password }) => {
    return auth
      .signIn(email, password)
      .then((loginData) => {
        localStorage.setItem("jwt", loginData.token);
        return loginData;
      })
      .then((user) => {
        setUserData({
          _id: user._id,
          username: user.name,
          email: user.email,
        });
        setIsSignedIn(true);
        closeActiveModal();
        navigate("/");
      })
      .catch(console.error);
  };

  // handle sign out
  const handleSignOut = () => {
    setIsSignedIn(false);
    closeActiveModal();
    navigate("/");
  };

  // use effect for checking if user is logged in
  useEffect(() => {
    const token = auth.getToken();
    if (token) {
      auth
        .checkTokenValidity(token)
        .then((user) => {
          setIsSignedIn(true);
          setUserData({
            _id: user._id,
            username: user.name,
            email: user.email,
          });
        })
        .catch((err) => {
          console.error("Token invalid or expired", err);
          setIsSignedIn(false);
          localStorage.removeItem("jwt");
        });
    } else {
      setIsSignedIn(false);
    }
  }, []);

  // Loading bookmarked articles on /saved-articles route
  useEffect(() => {
    if (isSignedIn && isSavedArticlesPage) {
      const token = auth.getToken();
      api
        .getSavedArticles(token)
        .then((savedArticles) => {
          setArticles(savedArticles);
        })
        .catch((err) => {
          console.error("Error loading saved articles:", err);
        });
    }
  }, [isSignedIn, isSavedArticlesPage]);

  // use effect for getting the news
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     filterSearchResults(newsData);
  //   }, 500);

  //   return () => clearTimeout(timeout);
  // }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser: userData, isSignedIn }}>
      <div className="app">
        <Header
          isSignedIn={isSignedIn}
          openLoginModal={openLoginModal}
          userData={userData}
          handleSignOut={handleSignOut}
          onSearch={handleSearch}
          showSearch={!isSavedArticlesPage}
        />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {hasSearched && !isLoading && errorMessage && (
                  <div className="main__error">{errorMessage}</div>
                )}
                {articles.length > 0 && !isLoading && (
                  <Main
                    articles={articles}
                    handleArticleBookmark={handleArticleBookmark}
                  />
                )}
                <About />
              </>
            }
          />
          <Route
            path="saved-articles"
            element={
              <ProtectedRoute isSignedIn={isSignedIn}>
                <SavedArticles
                  articles={articles}
                  handleArticleBookmark={handleArticleBookmark}
                />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
        <Footer />
        {isLoading && <Preloader />}
        <LoginModal
          isOpen={activeModal === "login"}
          openRegisterModal={openRegisterModal}
          openLoginModal={openLoginModal}
          closeActiveModal={closeActiveModal}
        />
        <RegisterModal
          isOpen={activeModal === "register"}
          handleRegistration={handleRegistration}
          error={registerError}
          openLoginModal={openLoginModal}
          closeActiveModal={closeActiveModal}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
