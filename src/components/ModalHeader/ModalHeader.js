import "./ModalHeader.css";

import closeBtn from "../../images/btn_close.png";
import React from "react";

function ModalHeader({ onClose, type }) {
  const [subtitle, setSubtitle] = React.useState("");

  React.useEffect(() => {
    if (type === "addUser") {
      setSubtitle("Создание пользователя");
    } else if (type === "editUser") {
      setSubtitle("Редактирование пользователя");
    } else if (type === "deleteUser") {
      setSubtitle("Удаление пользователя");
    } else if (type === "search") {
      setSubtitle("Search");
    }
  }, [type]);

  return (
    <div className="modal-header">
      <h2 className="modal-header__subtitle">{subtitle}</h2>
      <button
        type="button"
        id="img-close"
        className={`modal-header__close-button ${
          type === "deleteUser" ? "modal-header__close-button_type_delete" : ""
        }`}
        onClick={onClose}
      >
        <img src={closeBtn} alt="close" />
      </button>
    </div>
  );
}

export default ModalHeader;
