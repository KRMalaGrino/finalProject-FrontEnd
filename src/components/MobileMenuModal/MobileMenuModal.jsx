import React from "react";

function MobileMenuModal({ isOpen, closeActiveModal, openLoginModal }) {
  return (
    <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
      <div className="mobile-menu__container">
        <div className="mobile-menu__header">
          <h2 className="mobile-menu__title">NewsExplorer</h2>
          <button className="mobile-menu__close" onClick={closeActiveModal}>
            ✕
          </button>
        </div>

        <button className="mobile-menu__link">Home</button>
        <button className="mobile-menu__signin" onClick={openLoginModal}>
          Sign in
        </button>
      </div>
    </div>
  );
}

export default MobileMenuModal;
