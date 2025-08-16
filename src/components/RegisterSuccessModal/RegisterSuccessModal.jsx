import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterSuccessModal({ isOpen, openLoginModal, closeActiveModal }) {
  return (
    <ModalWithForm
      titleText="Registration successfully completed!"
      buttonText="Sign in"
      isOpen={isOpen}
      closeActiveModal={closeActiveModal}
      onSubmit={(e) => {
        e.preventDefault();
        closeActiveModal();
        openLoginModal();
      }}
    ></ModalWithForm>
  );
}

export default RegisterSuccessModal;
