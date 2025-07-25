import { useState, useEffect } from "react";

import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({
  isOpen,
  handleRegistration,
  openLoginModal,
  closeActiveModal,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration({ email, password, username })
      .then(() => {
        setEmail("");
        setPassword("");
        setUsername("");
      })
      .catch((err) => {
        console.error("Failed to register", err);
      });
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setUsername("");
    }
  }, [isOpen]);

  return (
    <ModalWithForm
      titleText="Sign up"
      buttonText="Sign up"
      altButtonText="Sign in"
      isOpen={isOpen}
      onSubmit={handleSubmit}
      closeActiveModal={closeActiveModal}
      onAltButtonClick={openLoginModal}
    >
      <label className="modal-with-form__label" htmlFor="register-email">
        {" "}
        <p className="modal-with-form__label-text">Email</p>
        <input
          className="modal-with-form__input"
          type="email"
          id="register-email"
          name="email"
          placeholder="Enter email"
          minLength="2"
          maxLength="200"
          required
          onChange={handleEmail}
          value={email}
        />
        <span className="modal-with-form__error" id="login-email-error">
          Please fill out this field.
        </span>
      </label>
      <label className="modal-with-form__label" htmlFor="register-password">
        {" "}
        <p className="modal-with-form__label-text">Password</p>
        <input
          className="modal-with-form__input"
          type="password"
          id="register-password"
          name="password"
          placeholder="Enter password"
          minLength="8"
          required
          onChange={handlePassword}
          value={password}
        />
        <span className="modal-with-form__error" id="register-password-error">
          Please enter a valid password.
        </span>
      </label>
      <label className="modal-with-form__label" htmlFor="register-username">
        {" "}
        <p className="modal-with-form__label-text">Username</p>
        <input
          className="modal-with-form__input"
          type="username"
          id="register-username"
          name="username"
          placeholder="Enter your username"
          minLength="4"
          required
          onChange={handleUsername}
          value={username}
        />
        <span className="modal-with-form__error" id="register-password-error">
          Please enter a valid password.
        </span>
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
