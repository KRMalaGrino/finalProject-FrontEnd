import { useEffect } from "react";

function ModalWithForm({
  closeActiveModal,
  isOpen,
  titleText,
  onSubmit,
  children,
  buttonText,
  altButtonText,
  activeModal,
}) {
  // click handler for clicking outside the modal to close it
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeActiveModal();
    }
  };
  // Escape key close modal
  useEffect(() => {
    if (!activeModal) return;
    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

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
            <div className="modal-with-form__alt-wrapper">
              <p className="modal-with-form__alt-text">or</p>
              <button className="modal-with-form__alt-btn">
                {altButtonText}
              </button>
            </div>
          </div>
        </form>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal-with-form__close-btn"
        ></button>
      </div>
    </div>
  );
}

export default ModalWithForm;
