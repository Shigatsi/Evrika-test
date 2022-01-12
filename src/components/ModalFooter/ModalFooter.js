import React from "react";
import "./ModalFooter.css";

function ModalFooter({
  userData,
  addUserSubmit,
  deleteUserSubmit,
  editUserSubmit,
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

  const onSubmitClick = (type, e) => {
    if (type === "addUser") {
      addUserSubmit(e);
    } else if (type === "editUser") {
      editUserSubmit(e);
    }
  };
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
            {/* {`${type === "deleteUser" && "Remove"}`} */}
          </button>
        </>
      ) : (
        <button
          type="submit"
          onClick={(e) => onSubmitClick(type, e)}
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
