import React from "react";
import { useEffect, useRef } from "react";

function MobileMenuModal({
  isOpen,
  closeActiveModal,
  openLoginModal,
  isSignedIn,
  onSignOut,
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        closeActiveModal();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeActiveModal]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeActiveModal();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, closeActiveModal]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 480 && isOpen) {
        closeActiveModal();
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, closeActiveModal]);

  const handleAuthClick = () => {
    if (isSignedIn) {
      if (onSignOut) {
        onSignOut();
      }
      closeActiveModal();
    } else {
      closeActiveModal();
      openLoginModal();
    }
  };

  //   const handleSignInClick = () => {
  //     closeActiveModal();
  //     openLoginModal();
  //   };

  return (
    <div
      className={`mobile-menu-overlay ${
        isOpen ? "mobile-menu-overlay--open" : ""
      }`}
    >
      <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
        <div className="mobile-menu__container" ref={modalRef}>
          <div className="mobile-menu__header">
            <h2 className="mobile-menu__title">NewsExplorer</h2>
            <button className="mobile-menu__close" onClick={closeActiveModal}>
              ✕
            </button>
          </div>

          <button className="mobile-menu__link">Home</button>
          <button className="mobile-menu__signin" onClick={handleAuthClick}>
            {isSignedIn ? "Sign out" : "Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MobileMenuModal;
