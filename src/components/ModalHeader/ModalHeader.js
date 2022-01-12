import "./ModalHeader.css";

import closeBtn from "../../images/btn_close.png";

function ModalHeader({ subtitle, onClose }) {
  return (
    <div className="modal-header">
      <h2 className="modal-header__subtitle">{subtitle}</h2>
      <button
        type="button"
        id="img-close"
        className="modal-header__close-button"
        onClick={onClose}
      >
        <img src={closeBtn} alt="close" />
      </button>
    </div>
  );
}

export default ModalHeader;
