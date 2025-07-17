import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({
  isOpen,
  handleSubmit,
  handleLogin,
  handleEmail,
  handlePassword,
}) {
  return (
    <ModalWithForm
      titleText="Sign in"
      buttonText="Sign in"
      altButtonText="Sign up"
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label className="modal-with-form__label" htmlFor="login-email">
        {" "}
        <p className="modal-with-form__label-text">Email</p>
        <input
          className="modal-with-form__input"
          type="email"
          id="login-email"
          name="email"
          placeholder="Enter email"
          minLength="2"
          maxLength="200"
          required
          // onChange={handleEmail}
          // value={email}
        />
        <span className="modal-with-form__error" id="login-email-error">
          Please fill out this field.
        </span>
      </label>
      <label className="modal-with-form__label" htmlFor="login-password">
        {" "}
        <p className="modal-with-form__label-text">Password</p>
        <input
          className="modal-with-form__input"
          type="password"
          id="login-password"
          name="password"
          placeholder="Enter password"
          minLength="8"
          required
          // onChange={handlePassword}
          // value={password}
        />
        <span className="modal-with-form__error" id="login-password-error">
          Please enter a valid password.
        </span>
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
