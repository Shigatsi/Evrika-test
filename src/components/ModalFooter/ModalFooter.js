import React from "react";
import "./ModalFooter.css";

function ModalFooter({
  userData,
  addUserSubmit,
  deleteUserSubmit,
  type,
  onClose,
}) {
  const [submitBtnCaption, setSubmitBtnCaption] = React.useState("");
  React.useEffect(() => {
    if (type === "addUser") {
      setSubmitBtnCaption("Создать");
    } else if (type === "editUser") {
      setSubmitBtnCaption("Сохранить");
    } else if (type === "deleteUser") {
      setSubmitBtnCaption("Удалить");
    }
  }, [type]);

  return (
    <div className="modal-footer">
      {type === "deleteUser" ? (
        <>
          <button className="modal-footer__btn" type="button" onClick={onClose}>
            Отменить
          </button>
          <button
            type="submit"
            className="modal-footer__btn modal-footer__btn_type_submit"
            onClick={deleteUserSubmit}
          >
            {submitBtnCaption}
          </button>
        </>
      ) : (
        <button
          type="submit"
          onClick={addUserSubmit}
          className={`modal-footer__btn modal-footer__btn_type_submit ${
            userData.surname &&
            userData.name &&
            userData.patronymic &&
            userData.email &&
            userData.login
              ? ""
              : "modal-footer__btn_type_disabled"
          }`}
        >
          {submitBtnCaption}
        </button>
      )}
    </div>
  );
}

export default ModalFooter;
