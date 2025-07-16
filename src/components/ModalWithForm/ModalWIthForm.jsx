function ModalWithForm({
  handleCloseClick,
  isOpen,
  titleText,
  onSubmit,
  children,
  buttonText,
}) {
  // click handler for clicking outside the modal to close it
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseClick();
    }
  };

  return (
    <div
      className={`modal-with-form ${isOpen && "modal-with-form_opened"}`}
      onClick={handleOverlayClick}
    >
      <div className="modal-with-form__container">
        <p className="modal-with-form__title">{titleText}</p>
        <form
          className="modal-with-form__form"
          id="modal-with-form"
          onSubmit={onSubmit}
        >
          {children}
          <div className="modal-with-form__button-wrapper">
            <button className="modal-with-form__submit-btn">
              {buttonText}
            </button>
          </div>
        </form>
        <button
          onClick={handleCloseClick}
          type="button"
          className="modal-with-form__close-btn"
        ></button>
      </div>
    </div>
  );
}

export default ModalWithForm;
