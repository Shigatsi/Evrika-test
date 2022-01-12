import "./ModalFooter.css";

function ModalFooter({ userData, btnCaption }) {
  return (
    <div className="modal-footer">
      <button
        className={`modal-footer__submit-btn ${
          userData.surname &&
          userData.name &&
          userData.patronymic &&
          userData.email &&
          userData.login
            ? ""
            : "modal-footer__submit-btn_type_disabled"
        }`}
      >
        {btnCaption}
      </button>
    </div>
  );
}

export default ModalFooter;
