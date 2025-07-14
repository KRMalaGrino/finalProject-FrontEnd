import { Route, Routes } from "react-router-dom";

import Header from "./Header/Header";
import Main from "./Main/Main";
import About from "./About/About";
import Footer from "./Footer/Footer";
import Preloader from "./Preloader/Preloader";
import LoginModal from "./LoginModal/LoginModal";
import RegisterModal from "./RegisterModal/RegisterModal";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/saved-news"
          element={
            <>
              <Main />
            </>
          }
        />
      </Routes>
      <Footer />
      <Preloader />
      <LoginModal />
      <RegisterModal />
    </div>
  );
}

export default App;
