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
import RegisterSuccessModal from "./RegisterSuccessModal/RegisterSuccessModal";
import MobileMenuModal from "./MobileMenuModal/MobileMenuModal";
// images
import NothingFound from "../images/not-found.svg";

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
  const [currentSearchKeyword, setCurrentSearchKeyword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const isSavedArticlesPage = location.pathname === "/saved-articles";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openRegisterModal = () => {
    setActiveModal("register");
  };

  const openLoginModal = () => {
    setActiveModal("login");
  };

  const openRegisterSuccessModal = () => {
    setActiveModal("register-success");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  function handleSearch(keyword) {
    setCurrentSearchKeyword(keyword);
    setIsLoading(true);
    setErrorMessage("");
    setHasSearched(true);

    newsApi
      .getNews(keyword)
      .then((data) => {
        const normalizedArticles = data.articles.map((article, index) => ({
          _id: article.url || `${index}-${Date.now()}`,
          title: article.title || "No title",
          description: article.description || "No description available",
          publishedAt: article.publishedAt || null,
          source: { name: article.source.name || "Unknown source" },
          urlToImage: article.urlToImage,
          isBookmarked: false,
          keyword: keyword,
        }));
        setArticles(normalizedArticles);
      })
      .catch((err) => {
        console.error("Error fetching news:", err.message);
        setErrorMessage(
          "Sorry, something went wrong during the request. Please try again later."
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleArticleBookmark = (article) => {
    const token = localStorage.getItem("jwt");

    if (!token) return;

    const { _id, isBookmarked, keyword } = article;

    if (!isBookmarked) {
      return api
        .saveArticle(article, token)
        .then((savedArticle) => {
          const keywordsMap = JSON.parse(
            localStorage.getItem("articleKeywords") || "{}"
          );
          keywordsMap[savedArticle._id] = keyword;
          localStorage.setItem("articleKeywords", JSON.stringify(keywordsMap));

          return api.bookmarkArticle(savedArticle._id, token).then(() => {
            updateArticleBookmark(savedArticle._id, true);
          });
        })
        .catch((err) => {
          console.error("Bookmark failed:", err);
        });
    } else {
      return api
        .unbookmarkArticle(_id, token)
        .then(() => {
          updateArticleBookmark(_id, false);
          const keywordsMap = JSON.parse(
            localStorage.getItem("articleKeywords") || "{}"
          );
          delete keywordsMap[_id];
          localStorage.setItem("articleKeywords", JSON.stringify(keywordsMap));

          if (isSavedArticlesPage) {
            setArticles((prevArticles) =>
              prevArticles.filter((a) => a._id !== _id)
            );
          } else {
            updateArticleBookmark(_id, false);
          }
        })
        .catch((err) => {
          console.error("Unbookmark failed:", err);
        });
    }
  };

  const updateArticleBookmark = (articleId, status) => {
    setArticles((prevArticles) =>
      prevArticles.map((a) =>
        a._id === articleId ? { ...a, isBookmarked: status } : a
      )
    );
  };

  function handleDeleteArticle(articleId) {
    const token = localStorage.getItem("jwt");
    api
      .deleteArticle(articleId, token)
      .then(() => {
        setArticles((prevArticles) =>
          prevArticles.filter((article) => article._id !== articleId)
        );
      })
      .catch((err) => console.error("Error deleting article:", err));
  }

  // handle register
  const handleRegistration = ({ email, password, username }) => {
    setRegisterError("");
    return auth
      .signUp(email, password, username)
      .then(() => {
        closeActiveModal();
        openRegisterSuccessModal();
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

  // keywords function
  function getTopKeywords(articles, limit = 3) {
    const keywordCounts = articles.reduce((acc, article) => {
      // Assuming article.keyword exists and is a string
      const keyword = article.keyword || "unknown";
      acc[keyword] = (acc[keyword] || 0) + 1;
      return acc;
    }, {});

    // Sort keywords by frequency
    const sortedKeywords = Object.entries(keywordCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([keyword]) => keyword);

    return sortedKeywords.slice(0, limit);
  }

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
          console.log("Saved articles fetched:", savedArticles);
          const keywordsMap = JSON.parse(
            localStorage.getItem("articleKeywords") || "{}"
          );

          const articlesWithKeyword = savedArticles.map((article) => ({
            ...article,
            keyword: keywordsMap[article._id] || "unknown", // fallback keyword
            isBookmarked: true,
          }));

          setArticles(articlesWithKeyword);
        })
        .catch((err) => {
          console.error("Error loading saved articles:", err);
        });
    }
  }, [isSignedIn, isSavedArticlesPage]);

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
          savedArticlesCount={articles.length}
          savedKeywords={getTopKeywords(articles)}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <Routes>
          <Route
            path="/"
            element={
              <div className="page-content">
                {hasSearched && !isLoading && errorMessage && (
                  <div className="main__error">{errorMessage}</div>
                )}

                {hasSearched &&
                  !isLoading &&
                  articles.length === 0 &&
                  !errorMessage && (
                    <div className="main__nothing-found-container">
                      <img
                        className="main__nothing-found-img"
                        src={NothingFound}
                        alt="nothing-found-image"
                      />
                      <p className="main__nothing-found-title">Nothing found</p>
                      <p className="main__nothing-found-description">
                        Sorry, but nothing matched your search terms.
                      </p>
                    </div>
                  )}

                {articles.length > 0 && !isLoading && (
                  <Main
                    articles={articles}
                    handleArticleBookmark={handleArticleBookmark}
                    currentSearchKeyword={currentSearchKeyword}
                  />
                )}
                <About />
              </div>
            }
          />
          <Route
            path="saved-articles"
            element={
              <ProtectedRoute isSignedIn={isSignedIn}>
                <SavedArticles
                  articles={articles}
                  handleArticleBookmark={handleArticleBookmark}
                  handleDeleteArticle={handleDeleteArticle}
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
          handleSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            const password = e.target.password.value;
            handleSignin({ email, password });
          }}
          closeActiveModal={closeActiveModal}
        />
        <RegisterModal
          isOpen={activeModal === "register"}
          handleRegistration={handleRegistration}
          error={registerError}
          openLoginModal={openLoginModal}
          closeActiveModal={closeActiveModal}
        />
        <RegisterSuccessModal
          isOpen={activeModal === "register-success"}
          openRegisterSuccessModal={openRegisterSuccessModal}
          closeActiveModal={closeActiveModal}
          openLoginModal={openLoginModal}
        />
        <MobileMenuModal
          isOpen={isMobileMenuOpen}
          closeActiveModal={() => setIsMobileMenuOpen(false)}
          openLoginModal={openLoginModal}
          isSignedIn={isSignedIn}
          onSignOut={handleSignOut}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
